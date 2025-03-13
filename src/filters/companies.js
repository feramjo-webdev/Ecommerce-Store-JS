import { getElement } from '../utils.js';
import display from '../displayProducts.js';
import setupSearch from './search.js';

const setupCompanies = (store) => {
  const allCompanies = Array.of(
    'all',
    ...new Set(
      store.map(({ company }) => {
        return company;
      })
    )
  );
  const companiesDOM = getElement('.companies');
  companiesDOM.innerHTML = allCompanies
    .map((eachCompany) => {
      return `<button class='company-btn' data-id="${eachCompany}">${eachCompany}</button>`;
    })
    .join('');

  companiesDOM.addEventListener('click', function (e) {
    const element = e.target;
    if (element.classList.contains('company-btn')) {
      const companyName = element.dataset.id;
      let newStore = [];
      if (companyName === 'all') {
        newStore = [...store];
      } else {
        newStore = store.filter((product) => {
          return companyName === product.company;
        });
      }
      const searchInput = getElement('.search-input');
      searchInput.value = '';
      display(newStore, getElement('.products-container'), true);
      setupSearch(newStore);
    }
  });
};

export default setupCompanies;
