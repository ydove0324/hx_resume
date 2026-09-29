(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  const links = [...nav.querySelectorAll('a')];
  const themeLabel = () => toggle.setAttribute('aria-label', `Switch to ${root.dataset.theme === 'dark' ? 'light' : 'dark'} theme`);
  themeLabel();
  toggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('xh-theme', root.dataset.theme); } catch (_) {}
    themeLabel();
  });
  const closeMenu = () => { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => {
    const opened = nav.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(opened));
  });
  links.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menu.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('nav')) closeMenu(); });
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let scheduled = false;
  const updateActive = () => {
    let active = sections[0];
    for (const section of sections) if (section.getBoundingClientRect().top <= 150) active = section;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = sections[sections.length - 1];
    links.forEach(link => {
      if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateActive); }
  }, { passive: true });
  updateActive();
})();
