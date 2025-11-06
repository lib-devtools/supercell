document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("username");
  const fullText = input.getAttribute("placeholder"); 
  input.setAttribute("placeholder", ""); 
  let i = 0;

  function typeEffect() {
    if (i < fullText.length) {
      input.setAttribute("placeholder", fullText.substring(0, i + 1));
      i++;
      setTimeout(typeEffect, 190); 
    }
  }

  typeEffect();
});
