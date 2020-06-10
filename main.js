// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#nav-wrapper').style.opacity = 0.9;
  } else {
    document.querySelector('#nav-wrapper').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#main-nav a, .btn').on('click', function (event) {
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
