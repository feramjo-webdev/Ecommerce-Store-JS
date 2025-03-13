import { getElement } from '../utils.js';

const toggleCartBtn = getElement('.toggle-cart');
const closeClassBtn = getElement('.cart-close');
const cartOverlay = getElement('.cart-overlay');

toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});
closeClassBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});

export const openCart = () => {
  cartOverlay.classList.add('show');
};
