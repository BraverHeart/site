const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const themeToggle = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('revolution-theme');
const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';

document.body.dataset.theme = initialTheme;

if (themeToggle) {
  const setTheme = (theme) => {
    const isLight = theme === 'light';
    document.body.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Gece moduna gec' : 'Gunduz moduna gec');
    localStorage.setItem('revolution-theme', theme);
  };

  setTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  });
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mainNav.classList.remove('is-open'));
  });
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  button?.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach((faq) => faq.classList.remove('active'));

    if (!isActive) item.classList.add('active');
  });
});
