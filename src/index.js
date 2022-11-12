import "../node_modules/modern-normalize";
import "./style/styles.scss";

const formForBuy = document.querySelector(".form");
const inputForBuy = formForBuy.querySelector("input");
const buyList = document.querySelector(".buy-list");
const btnCleanList = document.querySelector(".clean-list");

let itemBuy = "";
const MY_LIST = "my-list";

buyList.innerHTML = localStorage.getItem(MY_LIST);

function greatListItem(item) {
  const listItem = `<li class="buy-item"><p>${item}</p><button type="button" class="buy-btn">Купили</button></li>`;
  buyList.insertAdjacentHTML("beforeend", listItem);
}

function onFormSubmit(event) {
  event.preventDefault();
  if (inputForBuy.value.trim() === "") {
    return;
  }
  itemBuy = inputForBuy.value.trim();

  greatListItem(itemBuy);

  formForBuy.reset();
  localStorage.setItem(MY_LIST, `${buyList.innerHTML}`);
}

function onBtnCleanClick(event) {
  buyList.innerHTML = "";
  localStorage.removeItem(MY_LIST);
}

function onBtnBuyClick(event) {
  if (event.target.classList.contains("buy-btn")) {
    console.log(event.target.previousElementSibling.classList.add("buy"));
  }
  localStorage.setItem(MY_LIST, `${buyList.innerHTML}`);
}

formForBuy.addEventListener("submit", onFormSubmit);
btnCleanList.addEventListener("click", onBtnCleanClick);
buyList.addEventListener("click", onBtnBuyClick);
