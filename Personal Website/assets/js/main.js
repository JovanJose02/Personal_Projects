(() => {
  const root = document.documentElement;
  const THEME_KEY = 'portfolio-theme';

  // Theme toggle (initial theme is applied inline in <head> to avoid a flash)
  const themeToggle = document.getElementById('themeToggle');
  const syncThemeLabel = () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle?.setAttribute('aria-label', `Switch to ${next} mode`);
  };
  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    syncThemeLabel();
  });
  syncThemeLabel();

  // Mobile menu
  const menuButton = document.getElementById('menuButton');
  const navLinks = document.getElementById('navLinks');
  const menuIcon = menuButton?.querySelector('.menu-icon');
  const setMenu = (open) => {
    navLinks?.classList.toggle('is-open', open);
    menuIcon?.classList.toggle('is-open', open);
    menuButton?.setAttribute('aria-expanded', String(open));
  };
  menuButton?.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
  navLinks?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Active nav link on scroll
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const setActive = () => {
    let currentId = '';
    sections.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.top <= 140 && r.bottom >= 140) currentId = s.id;
    });
    navAnchors.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`));
  };
  document.addEventListener('scroll', setActive, { passive: true });
  setActive();

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
