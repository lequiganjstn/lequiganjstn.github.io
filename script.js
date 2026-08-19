const root = document.documentElement;
const themeButtons = [document.querySelector('#theme-toggle'), document.querySelector('#theme-toggle-mobile')].filter(Boolean);
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme) root.dataset.theme = savedTheme;

function toggleTheme() {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('portfolio-theme', nextTheme);
}

themeButtons.forEach((button) => button.addEventListener('click', toggleTheme));

const menuToggle = document.querySelector('#menu-toggle');
const siteNav = document.querySelector('#site-nav');
const sidebar = document.querySelector('.sidebar');
menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  sidebar?.classList.toggle('mobile-open', isOpen);
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    sidebar?.classList.remove('mobile-open');
  });
});

const technologyNames = [
  ['C#', 'C%23%20(CSharp).svg'], ['C', 'C.svg'], ['CSS3', 'CSS3.svg'], ['Figma', 'Figma.svg'],
  ['Git', 'Git.svg'], ['GitHub', 'GitHub.svg'], ['HTML5', 'HTML5.svg'], ['JavaScript', 'JavaScript.svg'],
  ['MySQL', 'MySQL.svg'], ['Node.js', 'Node.js.svg'], ['PHP', 'PHP.svg'], ['Python', 'Python.svg'],
  ['React', 'React.svg'], ['TypeScript', 'TypeScript.svg'], ['Vercel', 'Vercel.svg'], ['VS Code', 'Visual%20Studio%20Code%20(VS%20Code).svg']
];
const track = document.querySelector('#tech-track');

if (track) {
  const items = [...technologyNames, ...technologyNames];
  track.innerHTML = items.map(([name, file]) => `<div class="tech-item"><img src="assets/technologies/${file}" alt="${name} logo" loading="lazy"><span>${name}</span></div>`).join('');
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => observer.observe(section));

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get('name');
  alert(`Thanks, ${name || 'there'}! Your message has been received.`);
  event.currentTarget.reset();
});
