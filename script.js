
  document.addEventListener("DOMContentLoaded", function () {
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
        cursorChar: '|'
      });
    }
  });
