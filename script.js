const containerPrincipal = document.querySelector('.items');
const olPai = document.getElementsByClassName('cart__items')[0];
const botaoLimpar = document.getElementsByClassName('empty-cart')[0];

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
const novaImagem = image.replace('I.jpg', 'J.jpg');

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(novaImagem));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }
// 5. Some o valor total dos itens do carrinho de compras
const mostrarValorNaTela = (precoTotal) => {
  const total = document.querySelector('.total-price');
  const section = document.querySelector('.valorTotal');
  total.innerText = precoTotal;
  section.appendChild(total);
};

const somaValores = () => {
  const arrFrom = Array.from(olPai.children);
  const valorTotal = arrFrom.reduce((acc, posicaoAtual) => 
    acc + Number(posicaoAtual.innerText.split('$')[1]), 0);
    const valorFinal = valorTotal;
    return mostrarValorNaTela(valorFinal);
};
// 3. Remova o item do carrinho de compras ao clicar nele
function cartItemClickListener(event) {
  olPai.removeChild(event.target);
    somaValores();
    saveCartItems();
  }

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  olPai.appendChild(li);
  return li;
}
// 7. Adicione um texto de "carregando" durante uma requisição à API
const carregaPagina = (() => {
  const elemento = document.createElement('span');
  elemento.innerText = 'carregando...';
  elemento.className = 'loading';
  containerPrincipal.appendChild(elemento);
});  
 //   7. CONTINUACAO - RETIRADA ELEMENTO DA TELA.
const removCarregaPagina = (() => {
const loading = document.getElementsByClassName('loading')[0];
containerPrincipal.removeChild(loading);
console.log(loading);
});
// 1. Crie uma listagem de produtos.
const criarElementos = async (item) => {
  const produtos = await fetchProducts(item);
  const listaDeProdutos = produtos.results;
  listaDeProdutos.forEach((objeto) => {
  containerPrincipal.appendChild(createProductItemElement(objeto));
  });
  removCarregaPagina();
 };
//  2. Adicione o produto ao carrinho de compras.
const adicionaCarinho = async (event) => {
  if (event.target.className === 'item__add') {
    const id = event.target.parentElement.firstChild.innerText;
    const data = await fetchItem(id);
    createCartItemElement({
      sku: data.id,
      name: data.title,
      salePrice: data.price,
    });
    somaValores();
    saveCartItems();
  }
   };
  //  6. Implemente a lógica no botão Esvaziar carrinho para limpar o carrinho de compras
const esvaziaCarrinho = () => {
olPai.innerHTML = '';
somaValores();
saveCartItems();
};
window.onload = () => {
  criarElementos('computador'); // 1. Crie uma listagem de produtos
  carregaPagina();
  containerPrincipal.addEventListener('click', adicionaCarinho);
  botaoLimpar.addEventListener('click', esvaziaCarrinho);
  getSavedCartItems();
  olPai.addEventListener('click', cartItemClickListener);
  };
