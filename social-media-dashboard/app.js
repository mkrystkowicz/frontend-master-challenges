const toggleColorBtn = document.getElementById("mode-switch");
const slider = document.querySelector(".slider");
const mainDashboardElements = document.querySelectorAll(".media-dash");
const overviewDashboardElements = document.querySelectorAll(".daily-stat");

function toggleColor() {
  if (this.checked) {
    document.documentElement.style.setProperty(
      "--top-bg-color",
      "hsl(225, 100%, 98%)"
    );
    document.documentElement.style.setProperty(
      "--main-bg-color",
      "hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty(
      "--card-bg-color",
      "hsl(227, 47%, 96%)"
    );
    document.documentElement.style.setProperty(
      "--info-text-color",
      "hsl(228, 12%, 44%)"
    );
    document.documentElement.style.setProperty(
      "--info-number-color",
      "hsl(230, 17%, 14%)"
    );
    slider.style.background = "hsl(230, 22%, 74%)";
    mainDashboardElements.forEach(
      (el) => (el.style.background = "hsl(227, 47%, 96%)")
    );
    overviewDashboardElements.forEach(
      (el) => (el.style.background = "hsl(227, 47%, 96%)")
    );
  } else {
    document.documentElement.style.setProperty(
      "--top-bg-color",
      "hsl(232, 19%, 15%)"
    );
    document.documentElement.style.setProperty(
      "--main-bg-color",
      "hsl(230, 17%, 14%)"
    );
    document.documentElement.style.setProperty(
      "--card-bg-color",
      "hsl(228, 28%, 20%)"
    );
    document.documentElement.style.setProperty(
      "--info-text-color",
      "hsl(228, 34%, 66%)"
    );
    document.documentElement.style.setProperty(
      "--info-number-color",
      "hsl(0, 0%, 100%)"
    );
    slider.style.background =
      "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%)";
    mainDashboardElements.forEach(
      (el) => (el.style.background = "hsl(228, 28%, 20%)")
    );
    overviewDashboardElements.forEach(
      (el) => (el.style.background = "hsl(228, 28%, 20%)")
    );
  }
}

function changeHover() {
  if (toggleColorBtn.checked) {
    this.style.background = "hsl(227, 26%, 83%)";
  } else {
    this.style.background = "hsl(229, 29%, 39%)";
  }
  this.addEventListener("mouseleave", () => {
    if (toggleColorBtn.checked) {
      this.style.background = "hsl(227, 47%, 96%)";
    } else {
      this.style.background = "hsl(228, 28%, 20%)";
    }
  });
}

toggleColorBtn.addEventListener("click", toggleColor);
mainDashboardElements.forEach((el) =>
  el.addEventListener("mousemove", changeHover)
);
overviewDashboardElements.forEach((el) =>
  el.addEventListener("mousemove", changeHover)
);
