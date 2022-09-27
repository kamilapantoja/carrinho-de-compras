const ol = document.querySelector('.cart__items');
const loading = document.querySelector('.loading');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

/* function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

function cartItemClickListener(event) {
  // coloque seu código aqui
  ol.removeChild(event.target);
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function adicaoItemCarrinho(event) {
  const irmaoDoBotao = event.srcElement.parentElement.children[0].innerText;
  const api = await fetchItem(irmaoDoBotao);
  ol.appendChild(createCartItemElement(api));
}

function limpaCarrinho() {
  const botaoEsvaziarCarrinho = document.querySelector('.empty-cart');
  botaoEsvaziarCarrinho.addEventListener('click', () => {
    saveCartItems(ol.innerHTML = ''); 
  });
}
limpaCarrinho();

window.onload = async () => {
  const data = await fetchProducts('computador');
//  console.log(data);
// link externo consultado para elaboração do setTimeout
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
  setTimeout(loading.remove(), 1000);

  const sectionItems = document.querySelector('.items');
  data.results.forEach((elemento) => {
    sectionItems.appendChild(createProductItemElement(elemento));
  });

  const botoes = document.querySelectorAll('.item__add');
  botoes.forEach((btn) => {
    btn.addEventListener('click', adicaoItemCarrinho);
  });
};
