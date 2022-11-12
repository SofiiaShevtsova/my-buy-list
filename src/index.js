import "../node_modules/modern-normalize";
import "./style/styles.scss";

const formForBuy = document.querySelector(".form");
const inputForBuy = formForBuy.querySelector("input");
const buyList = document.querySelector(".buy-list");
const btnCleanList = document.querySelector(".clean-list");

let itemBuy = "";

function greatListItem(item) {
  const listItem = `<li class="buy-item"><p>${item}</p><button type="button" class="buy-btn">Купили</button></li>`;
  buyList.insertAdjacentHTML("beforeend", listItem);
}

function onFormSubmit(event) {
  event.preventDefault();
  itemBuy = inputForBuy.value;

  greatListItem(itemBuy);

  formForBuy.reset();
}

function onBtnCleanClick(event) {
  buyList.innerHTML = "";
}

function onBtnBuyClick(event) {
  if (event.target.classList.contains("buy-btn")) {
    console.log(event.target.previousElementSibling.classList.add("buy"));
  }
}

formForBuy.addEventListener("submit", onFormSubmit);
btnCleanList.addEventListener("click", onBtnCleanClick);
buyList.addEventListener("click", onBtnBuyClick);
