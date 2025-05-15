
// Step-by-step interaction
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".proceed-button");
  let step = 0;

  button.addEventListener("click", function () {
    step++;

    if (step === 1) {
      document.querySelector("#chatWindow").classList.remove("hidden");
      this.id = "next-1";
    } else if (step === 2) {
      document.querySelector("#folderWindow").classList.remove("hidden");
      this.id = "next-2";
    } else if (step === 3) {
      alert("You've explored all the folders. Thanks for visiting!");
      this.remove();
    }
  });
});
