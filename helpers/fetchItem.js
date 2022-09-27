const endPoint = 'https://api.mercadolibre.com/items/';
const fetchItem = async (pesquisa) => {
  // seu código aqui
  try {
    const promisse = await fetch(`${endPoint}${pesquisa}`);
    const data = await promisse.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
