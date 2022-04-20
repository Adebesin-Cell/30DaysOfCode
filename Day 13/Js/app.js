const root = document.documentElement;
const rangeSlider = document.querySelector(".pricing__range");

rangeSlider.setAttribute("value", 0);

window.addEventListener("load", function (e) {
  root.style.setProperty("--slide-fill", `${rangeSlider.value}%`);
});

rangeSlider.addEventListener("input", function (e) {
  root.style.setProperty("--slide-fill", `${e.target.value}%`);
  rangeSlider.setAttribute("value", e.target.value);
});
