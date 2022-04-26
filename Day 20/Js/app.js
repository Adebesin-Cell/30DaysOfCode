const FETCH_ADRESS = "https://api.adviceslip.com/advice";
const blockqouteEl = document.querySelector(".card__paragraph");
const cardTitleEl = document.querySelector(".card__title");
const cardButtonEl = document.querySelector(".card__button");

const templateBody = function (data) {
  return `
        <p>
          <i>"</i> ${data.advice} <i>"</i>
        </p>`;
};

const templateHead = function (data) {
  return `<span class="card__span"> Advice </span>
          <span class="card__id" data-id=${data.id}>#${data.id}</span>`;
};

const fetchData = async function () {
  try {
    const res = await fetch(FETCH_ADRESS);
    const data = await res.json();
    const templateHeadData = templateHead(data.slip);
    const templateBodyData = templateBody(data.slip);
    blockqouteEl.innerHTML = templateBodyData;
    cardTitleEl.innerHTML = templateHeadData;
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

(async function () {
  await fetchData();
})();

cardButtonEl.addEventListener("click", async function (e) {
  await fetchData();
});
