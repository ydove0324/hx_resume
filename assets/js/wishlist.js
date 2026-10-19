(() => {
  const buildDraft = (form) => {
    const en = form.dataset.language === 'en';
    const labels = en ? ['Email', 'Repository URL', 'Compute available', 'Minimum compute required', 'Other information'] : ['联系邮箱', 'Repo 链接', '是否自有算力支持', '最少需要多少算力', '其他信息'];
    const keys = ['email', 'repo', 'compute', 'minimum', 'other'];
    return labels.map((label, i) => `${label}: ${form.elements[keys[i]].value.trim()}`).join('\n\n');
  };
  document.querySelectorAll('.wishlist-form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      location.href = `mailto:ydove1031@gmail.com?subject=${encodeURIComponent('ResearchBoost Wishlist')}&body=${encodeURIComponent(buildDraft(form))}`;
    });
    form.querySelector('.wishlist-copy').addEventListener('click', async () => {
      const status = form.querySelector('.wishlist-status');
      try {
        await navigator.clipboard.writeText(`To: ydove1031@gmail.com\nSubject: ResearchBoost Wishlist\n\n${buildDraft(form)}`);
        status.textContent = form.dataset.language === 'en' ? 'Template copied. Paste it into your email app.' : '邮件模板已复制，可粘贴到邮件应用中。';
      } catch {
        status.textContent = form.dataset.language === 'en' ? 'Copy is unavailable. Please use “Open email draft”.' : '无法复制，请使用“打开邮件草稿”。';
      }
    });
  });
  document.querySelectorAll('a[href="#wishlist"]').forEach(link => link.addEventListener('click', () => {
    const panel = document.getElementById('wishlist');
    if (panel) panel.open = true;
  }));
  if (location.hash === '#wishlist') document.getElementById('wishlist')?.setAttribute('open', '');
})();
