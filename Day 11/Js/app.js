const ratingPageEl = document.querySelector(".rating");
const thankYouPageEl = document.querySelector(".feedback");
const form = document.querySelector(".rating__form");
const ratingValueEl = document.querySelector(".feedback__rating");
const totalRatingValueEl = document.querySelector(".feedback__total");

const TOTAL_RATING = 5;
const TIMER = 2500;

const showThankYouPage = function (ratingValue) {
  ratingPageEl.classList.add("rating--hidden");
  thankYouPageEl.classList.remove("feedback--hidden");
  ratingValueEl.textContent = ratingValue;
  totalRatingValueEl.textContent = TOTAL_RATING;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = [...new FormData(form)].flat(1);

  if (formData.length === 0) return;

  const [_, value] = formData;

  setTimeout(showThankYouPage(value), TIMER);
});
