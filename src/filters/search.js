import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupSearch = (store) => {
  const inputForm = getElement('.input-form');
  const searchInput = getElement('.search-input');
  inputForm.addEventListener('keyup', () => {
    const searchInputValue = searchInput.value.toLowerCase();
    if (searchInputValue) {
      const matchedProducts = store.filter(({ name }) =>
        name.includes(searchInputValue)
      );
      display(matchedProducts, getElement('.products-container'), true);
      if (matchedProducts.length < 1) {
        const productsContainer = getElement('.products-container');
        productsContainer.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
      }
    } else {
      display(store, getElement('.products-container'), true);
    }
  });
};

export default setupSearch;
