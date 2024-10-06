import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  if (cartItems.length > 0) {
    document.querySelector(".cart-footer").classList.remove("hide");
    const total = calculateTotal(cartItems);
    document.getElementById("cart-total").textContent = total.toFixed(2);
  } else {
    document.querySelector(".cart-footer").classList.add("hide");
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
  return newItem;
}

function calculateTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.FinalPrice, 0);
}

function clearCart() {
  localStorage.removeItem("so-cart"); 
  renderCartContents(); 
}

document.getElementById("clear-cart").addEventListener("click", clearCart);

renderCartContents();