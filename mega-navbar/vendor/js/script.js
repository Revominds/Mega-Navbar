let navToggle = document.querySelector('.nav-toggle');
let navToggleIcon = document.querySelector('.nav-toggle .fa-bars');
let navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navMenu.classList.setAttribute('name', 
    navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars'
  );
});