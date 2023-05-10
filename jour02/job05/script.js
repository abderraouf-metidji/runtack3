window.addEventListener("scroll", function() {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const progress = Math.min(scrolled / (fullHeight - windowHeight), 1);
    const footer = document.querySelector("footer");
    const color = `rgb(${progress * 255}, ${progress * 255}, ${progress * 255})`;
    footer.style.backgroundColor = color;
  });
  