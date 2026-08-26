async function loadTerms() {
  const container = document.querySelector('#terms');
  const count = document.querySelector('#count');

  try {
    const ids = await fetch('./data/terms/index.json').then((r) => {
      if (!r.ok) throw new Error(`index: ${r.status}`);
      return r.json();
    });

    const terms = await Promise.all(
      ids.map((id) =>
        fetch(`./data/terms/${id}.json`).then((r) => {
          if (!r.ok) throw new Error(`${id}: ${r.status}`);
          return r.json();
        })
      )
    );

    const publicTerms = terms.filter((item) => item.public && item.status === 'accepted');
    count.textContent = `${publicTerms.length} ${publicTerms.length === 1 ? 'entry' : 'entries'}`;

    container.innerHTML = publicTerms.map((item) => `
      <article class="card">
        <div class="meta">${escapeHtml(item.category)}</div>
        <h3>${escapeHtml(item.term)}</h3>
        ${item.reading ? `<p class="reading">${escapeHtml(item.reading)}</p>` : ''}
        <p>${escapeHtml(item.summary)}</p>
        <div class="tags">${(item.tags || []).map((tag) => `<span>#${escapeHtml(tag)}</span>`).join('')}</div>
      </article>
    `).join('');
  } catch (error) {
    console.error(error);
    container.innerHTML = '<p>Knowledge data could not be loaded.</p>';
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

loadTerms();
