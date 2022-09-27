const link = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const fetchProducts = async (pesquisa) => {
  try {
    const response = await fetch(`${link}${pesquisa}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
