const tooltip = document.querySelector(".tooltip");
const shareBtn = document.querySelector(".share-btn");
const shareSection = document.querySelector(".share-section");

// console.log(tooltip);

shareBtn.addEventListener("click", () => {
  tooltip.classList.toggle("active");
  shareSection.classList.toggle("active");
  shareBtn.classList.toggle("active");
});
