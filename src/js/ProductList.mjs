import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="/product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.products = [];
  }
  async init() {
    try {
      // Obtiene los datos de los productos y almacénalos en this.products
      const list = await this.dataSource.getData(this.category);
      this.products = list || []; // Asegúrate de que sea un arreglo aunque esté vacío
      this.renderList(this.products); // Renderiza la lista de productos
      document.querySelector(".title").textContent = this.category; // Muestra la categoría actual
    } catch (error) {
      console.error("Error loading products:", error);
    }
  }

  renderList(list) {
    // Renderiza la lista en el DOM
    renderListWithTemplate(productCardTemplate, this.listElement, list, "afterbegin", true);
  }

  sortAndRender(criteria) {
    // Ordena la lista de productos en función del criterio
    let sortedList = [...this.products]; // Copia el arreglo para no modificar el original
    if (criteria === "name") {
      sortedList.sort((a, b) => a.Name.localeCompare(b.Name));
    } else if (criteria === "price") {
      sortedList.sort((a, b) => a.FinalPrice - b.FinalPrice);
    }
    // Vuelve a renderizar la lista ordenada
    this.renderList(sortedList);
  }
}