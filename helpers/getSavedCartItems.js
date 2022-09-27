/* const getSavedCartItems = () => {
  // seu código aqui
}; */

const getSavedCartItems = () => localStorage.getItem('cartItems');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
