const hamburger = document.querySelector('.hamburger');
const navul = document.querySelector('.navul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navul.classList.toggle('active');
});

document.querySelectorAll('.span').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navul.classList.remove('active');
}));