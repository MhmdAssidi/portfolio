window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  // Add the nav-sticky class when scrolling
  if (window.scrollY > 0) {
    navbar.classList.add('nav-sticky');
  } else {
    navbar.classList.remove('nav-sticky');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('nav-sticky');
  }
});


  const typedText = document.querySelector('.hero .hero-text .typed-text');
  const output = document.querySelector('.hero .hero-text .typing-output');
  if (typedText && output) {
    const strings = typedText.textContent.split(', ').map(str => str.trim());

    new Typed(output, {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      smartBackspace: false,
      showCursor: true,
      cursorChar: '|',
    });
  }
