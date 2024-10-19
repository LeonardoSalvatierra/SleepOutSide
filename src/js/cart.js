import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

document.addEventListener("DOMContentLoaded", function () {
  loadHeaderFooter();
});

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();

