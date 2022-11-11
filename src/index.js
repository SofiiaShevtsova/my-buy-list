import "./styles.css";
import "../node_modules/modern-normalize";

const formForBuy = document.querySelector(".form");
const inputForBuy = formForBuy.querySelector("input");
const buyList = document.querySelector(".buy-list");
const btnCleanList = document.querySelector(".clean-list");

let itemBuy = "";

function greatListItem(item) {
  const listItem = `<li class="buy-item">${item}<button type="button" class="buy-btn">Buy</button></li>`;
  buyList.insertAdjacentHTML("beforeend", listItem);
}

function getItemBuy(event) {
  event.preventDefault();
  itemBuy = inputForBuy.value;

  greatListItem(itemBuy);

  formForBuy.reset();
}

formForBuy.addEventListener("submit", getItemBuy);
btnCleanList.addEventListener("click", (event) => {
  buyList.innerHTML = "";
});
buyList.addEventListener("click", (event) => {
  if (event.target.classList.contains("buy-btn")) {
    console.log(event.target.parentNode.classList.add("buy"));
  }
});
