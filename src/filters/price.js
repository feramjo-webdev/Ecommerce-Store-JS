import { getElement } from '../utils.js';
import display from '../displayProducts.js';
import setupSearch from './search.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');
  let productPrices = store.map((product) => product.price);
  let maxPrice = Math.max(...productPrices);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value: $${maxPrice}`;

  priceInput.addEventListener('input', function (e) {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value: $${value}`;
    let newStore = store.filter((product) => product.price / 100 <= value);
    if (newStore.length < 1) {
      const productsContainer = getElement('.products-container');
      productsContainer.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
      return;
    }
    display(newStore, getElement('.products-container'), true);
    setupSearch(newStore);
  });
};

export default setupPrice;
