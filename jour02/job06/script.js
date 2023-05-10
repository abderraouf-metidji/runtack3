const konamiCode = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"];

let konamiIndex = 0;

document.addEventListener("keydown", function(event) {
  if (event.code === konamiCode[konamiIndex]) {
    konamiIndex++;
  } else {
    konamiIndex = 0;
  }
  
  if (konamiIndex === konamiCode.length) {
    document.body.classList.add("konami");
    konamiIndex = 0;
  }
});
