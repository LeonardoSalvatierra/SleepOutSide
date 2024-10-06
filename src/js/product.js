import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// function addProductToCart(product) {
//   // const currentStorage = getLocalStorage("so-cart");
//   localStorage.clear();
//   localStorage.setItem("so-cart", [product]);
// }
// add to cart button event handler
// function addProductToCart(product) {
//   let products = JSON.parse(localStorage.getItem("so-cart"));
//   if (!products){
//     products = [];
//   }
//   products.push(product)
//   localStorage.setItem("so-cart", JSON.stringify(products));

//  }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
