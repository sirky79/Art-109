
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".proceed-button");
  let step = 0;

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
  document.querySelectorAll(".window").forEach(window => {
    const header = window.querySelector(".title-bar");

    header.addEventListener("mousedown", startDrag);

    function startDrag(e) {
      const shiftX = e.clientX - window.offsetLeft;
      const shiftY = e.clientY - window.offsetTop;

      function onMouseMove(e) {
        window.style.left = `${e.clientX - shiftX}px`;
        window.style.top = `${e.clientY - shiftY}px`;
      }

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMouseMove);
      }, { once: true });
    }

document.querySelectorAll(".folder").forEach(folder => {
  folder.addEventListener("click", () => {
    const targetId = folder.getAttribute("data-target");
    document.getElementById(targetId)?.classList.remove("hidden");
  });
});

  });
});
