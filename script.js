const barImage = document.querySelector('.menu');
const crossMenu = document.querySelector('.fa-xmark');
const mobileMenu = document.querySelector('.mobile-menu');
barImage.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});
crossMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
document.querySelectorAll('.hamburger-nav-list').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
}));
