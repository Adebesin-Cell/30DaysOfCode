const root = document.documentElement;
const rangeSlider = document.querySelector(".pricing__range");
const pagesViewEl = document.querySelector(".pricing__rate");
const ratingDiscountCheck = document.querySelector(".pricing__checkbox");
const priceEl = document.querySelector(".pricing__value--lg");

priceEl.textContent = `$${0.0}`;
rangeSlider.setAttribute("value", 0);
pagesViewEl.textContent = `0K pageviews`;

const pricingHandler = function (value) {
  let pricing;

  if (value < 1) {
    pricing = 0;
    pagesViewEl.textContent = `0K pageviews`;
  }

  if (value > 0 && value <= 20) {
    pagesViewEl.textContent = `10K pageviews`;
    pricing = 8;
  } else if (value > 20 && value <= 40) {
    pagesViewEl.textContent = `50K pageviews`;
    pricing = 12;
  } else if (value > 40 && value <= 60) {
    pagesViewEl.textContent = `100K pageviews`;
    pricing = 16;
  } else if (value > 60 && value <= 80) {
    pagesViewEl.textContent = `500k pageviews`;
    pricing = 24;
  } else if (value > 80 && value <= 100) {
    pagesViewEl.textContent = `1M pageviews`;
    pricing = 36;
  }

  if (ratingDiscountCheck.checked) {
    const discountPrice = pricing - pricing * 0.25;
    priceEl.textContent = `$${discountPrice.toFixed(2)}`;
  } else {
    priceEl.textContent = `$${pricing.toFixed(2)}`;
  }
};

window.addEventListener("load", function (e) {
  root.style.setProperty("--slide-fill", `${rangeSlider.value}%`);
});

rangeSlider.addEventListener("input", function (e) {
  const rangeValue = e.target.value;

  root.style.setProperty("--slide-fill", `${rangeValue}%`);
  rangeSlider.setAttribute("value", rangeValue);

  pricingHandler(rangeValue);
});

ratingDiscountCheck.addEventListener("input", function (e) {
  pricingHandler(rangeSlider.value);
});
