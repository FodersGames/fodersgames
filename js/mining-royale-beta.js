const elements = document.querySelectorAll(
  '.hero-title, .hero-subtitle, .hero-tag, .release-section'
);

const reveal = () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

/* Subtle parallax */
const hero = document.querySelector('.hero-game');

window.addEventListener('scroll', () => {
  hero.style.backgroundPositionY = `${window.scrollY * 0.25}px`;
});
