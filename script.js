const containerPrincipal = document.querySelector('.items');
const olPai = document.getElementsByClassName('cart__items')[0];

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

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// function cartItemClickListener(event) {
//   // coloque seu código aqui
// }

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  olPai.appendChild(li);
  return li;
}
const criarElementos = async (item) => {
  const produtos = await fetchProducts(item);
  const listaDeProdutos = produtos.results;
  listaDeProdutos.forEach((objeto) => {
  containerPrincipal.appendChild(createProductItemElement(objeto));
  });
  console.log(listaDeProdutos);
};
const adicionaCarinho = async (event) => {
  if (event.target.className === 'item__add') {
    const id = event.target.parentElement.firstChild.innerText;
    const data = await fetchItem(id);
    createCartItemElement({
      sku: data.id,
      name: data.title,
      salePrice: data.price,
    });
  }
};
window.onload = () => {
  criarElementos('computador');
  containerPrincipal.addEventListener('click', adicionaCarinho);
  };

// test