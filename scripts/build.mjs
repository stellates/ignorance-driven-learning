import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = new URL('../', import.meta.url);
const rootPath = root.pathname;

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const categorySlug = (category) => {
  const top = String(category).split('/')[0].trim();
  if (top.toUpperCase() === 'IT') return 'it';
  return top.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

const page = ({ title, description, stylesheet, body }) => `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="stylesheet" href="${stylesheet}">
</head>
<body>
${body}
</body>
</html>
`;

async function write(path, content) {
  const full = join(rootPath, path);
  await mkdir(dirname(full), { recursive: true });
  await writeFile(full, content, 'utf8');
}

const ids = JSON.parse(await readFile(join(rootPath, 'data/terms/index.json'), 'utf8'));
const terms = await Promise.all(ids.map(async (id) => JSON.parse(await readFile(join(rootPath, `data/terms/${id}.json`), 'utf8'))));
const publicTerms = terms.filter((item) => item.public && item.status === 'accepted');

const groups = new Map();
for (const item of publicTerms) {
  const slug = categorySlug(item.category);
  if (!slug) throw new Error(`Cannot derive category slug from: ${item.category}`);
  if (!groups.has(slug)) groups.set(slug, []);
  groups.get(slug).push(item);
}

const categoryCards = [...groups.entries()].map(([slug, items]) => {
  const name = String(items[0].category).split('/')[0].trim();
  const categories = [...new Set(items.map((item) => item.category))].join(' / ');
  return `        <a class="card card-link" href="./${slug}/">
          <div class="meta">${escapeHtml(categories)}</div>
          <h3>${escapeHtml(name)}</h3>
          <p>実際にAIへ聞き、人間が採用したナレッジ。</p>
          <div class="tags"><span>${items.length} ${items.length === 1 ? 'entry' : 'entries'}</span></div>
        </a>`;
}).join('\n');

await write('knowledge/index.html', page({
  title: 'Knowledge | Ignorance Driven Learning',
  description: '知らなかったことをカテゴリごとに整理したナレッジ一覧。',
  stylesheet: '../styles.css',
  body: `  <main class="container">
    <nav class="breadcrumb"><a href="../">Home</a><span>/</span><span>Knowledge</span></nav>
    <header class="hero compact">
      <p class="eyebrow">Knowledge</p>
      <h1>知らなかったことを、<br>カテゴリから辿る。</h1>
      <p class="lead">実際にAIへ聞き、人間が採用した知識だけを残しています。</p>
    </header>
    <section>
      <div class="section-head"><h2>Categories</h2></div>
      <div class="grid">
${categoryCards}
      </div>
    </section>
  </main>`
}));

for (const [slug, items] of groups) {
  const name = String(items[0].category).split('/')[0].trim();
  const cards = items.map((item) => `        <a class="card card-link" href="./${escapeHtml(item.id)}/"><div class="meta">${escapeHtml(item.category)}</div><h3>${escapeHtml(item.term)}</h3>${item.reading ? `<p class="reading">${escapeHtml(item.reading)}</p>` : ''}<p>${escapeHtml(item.summary)}</p></a>`).join('\n');

  await write(`knowledge/${slug}/index.html`, page({
    title: `${name} Knowledge | Ignorance Driven Learning`,
    description: `${name}で実際につまずいた用語の一覧。`,
    stylesheet: '../../styles.css',
    body: `  <main class="container">
    <nav class="breadcrumb"><a href="../../">Home</a><span>/</span><a href="../">Knowledge</a><span>/</span><span>${escapeHtml(name)}</span></nav>
    <header class="hero compact">
      <p class="eyebrow">${escapeHtml(name)} Knowledge</p>
      <h1>${escapeHtml(name)}で、実際に分からなかったこと。</h1>
      <p class="lead">用語を押すと個別ナレッジへ移動します。</p>
    </header>
    <section>
      <div class="section-head"><h2>Entries</h2><span>${items.length} ${items.length === 1 ? 'entry' : 'entries'}</span></div>
      <div class="grid">
${cards}
      </div>
    </section>
  </main>`
  }));

  for (const item of items) {
    const tags = (item.tags || []).map((tag) => `<span>#${escapeHtml(tag)}</span>`).join('');
    await write(`knowledge/${slug}/${item.id}/index.html`, page({
      title: `${item.term} | ${name} Knowledge`,
      description: item.summary,
      stylesheet: '../../../styles.css',
      body: `  <main class="container detail-page">
    <nav class="breadcrumb"><a href="../../../">Home</a><span>/</span><a href="../../">Knowledge</a><span>/</span><a href="../">${escapeHtml(name)}</a><span>/</span><span>${escapeHtml(item.term)}</span></nav>
    <article class="detail-card">
      <p class="eyebrow">${escapeHtml(item.category)}</p>
      <h1>${escapeHtml(item.term)}</h1>
      ${item.reading ? `<p class="reading">${escapeHtml(item.reading)}</p>` : ''}
      <p class="detail-summary">${escapeHtml(item.summary)}</p>
      <section><h2>どういう意味？</h2><p>${escapeHtml(item.explanation)}</p></section>
      ${item.example ? `<section><h2>例</h2><p>${escapeHtml(item.example)}</p></section>` : ''}
      <section><h2>また聞いた回数</h2><p>${Number(item.asked_count || 0)}回</p></section>
      <div class="tags">${tags}</div>
    </article>
  </main>`
    }));
  }
}

console.log(`Built ${publicTerms.length} knowledge entries in ${groups.size} categories.`);
