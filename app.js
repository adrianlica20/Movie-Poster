const netflixBtn = document.getElementById('netflix-btn');
const closeBtn = document.getElementById('close-btn');

const h1 = document.querySelector('h1');
const zombieHands = document.getElementById('zombie-hands');
const poster = document.getElementById('poster');

netflixBtn.addEventListener('mouseenter', () => {
  h1.classList.add('neon');
  zombieHands.classList.add('neon');
});

netflixBtn.addEventListener('mouseleave', () => {
  h1.classList.remove('neon');
  zombieHands.classList.remove('neon');
});

closeBtn.addEventListener('click', () => {
  poster.classList.add('hidden');
  h1.classList.add('neon');
});
