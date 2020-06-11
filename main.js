// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#nav-wrapper').style.opacity = 0.9;
  } else {
    document.querySelector('#nav-wrapper').style.opacity = 1;
  }
});

//nav bar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});

// Smooth Scrolling
$('#nav-wrapper a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 80,
      },
      800
    );
  }
});
