  const usernameInput = document.getElementById("username");
  let pressTimer;

  usernameInput.addEventListener("mousedown", function() {
    pressTimer = setTimeout(async () => {
      try {
        const text = await navigator.clipboard.readText();
        if (text && text.trim().startsWith("#")) {
          this.value = text.trim();
        }
      } catch (err) {
      }
    }, 500); 
  });

  usernameInput.addEventListener("mouseup", function() {
    clearTimeout(pressTimer);
  });

  usernameInput.addEventListener("touchstart", function() {
    pressTimer = setTimeout(async () => {
      try {
        const text = await navigator.clipboard.readText();
        if (text && text.trim().startsWith("#")) {
          this.value = text.trim();
        }
      } catch (err) {
      }
    }, 500);
  });

  usernameInput.addEventListener("touchend", function() {
    clearTimeout(pressTimer);
  });
