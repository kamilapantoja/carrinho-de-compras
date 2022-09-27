const saveCartItems = (itemCarrinho) => {
  // seu código aqui
  localStorage.setItem('cartItems', itemCarrinho);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
