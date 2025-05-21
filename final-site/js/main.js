



document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".proceed-button");
  let step = 0;

  // Next button step logic
  button.addEventListener("click", () => {
    step++;
    if (step === 1) document.querySelector("#chatWindow").classList.remove("hidden");
    else if (step === 2) document.querySelector("#folderWindow").classList.remove("hidden");
    else if (step === 3) {
      alert("You've explored all the folders. Thanks for visiting!");
      button.remove();
    }
  });

  // Make all windows draggable
  document.querySelectorAll(".window").forEach(win => {
    const titleBar = win.querySelector(".title-bar");

    titleBar.addEventListener("mousedown", function (event) {
      const offsetX = event.clientX - win.offsetLeft;
      const offsetY = event.clientY - win.offsetTop;

      function moveWindow(event) {
        win.style.left = (event.clientX - offsetX) + "px";
        win.style.top = (event.clientY - offsetY) + "px";
      }

      document.addEventListener("mousemove", moveWindow);

      document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", moveWindow);
      }, { once: true });
    });
  });

  // Open folders to show their windows
  document.querySelectorAll(".folder").forEach(folder => {
    folder.addEventListener("click", () => {
      const targetId = folder.getAttribute("data-target");
      document.getElementById(targetId)?.classList.remove("hidden");
    });
  });

  // Menu toggle (if you’re using a nav menu)
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const windowclose = btn.closest(".window");
    if (windowclose) {
      windowclose.classList.add("hidden");
    }
  });
});

  
});
