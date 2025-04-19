// Открытие/закрытие меню
const mobileBtn = document.querySelector('.mobile-btn');
const closeBtn = document.querySelector('.close-btn');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav-link');

mobileBtn.addEventListener('click', () => {
  navOverlay.classList.add('active');
  document.querySelector('.header').classList.add('open');
});

closeBtn.addEventListener('click', () => {
  navOverlay.classList.remove('active');
  document.querySelector('.header').classList.remove('open');
});

// Закрытие меню при клике на пункт
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navOverlay.classList.remove('active');
    document.querySelector('.header').classList.remove('open');
  });
});
