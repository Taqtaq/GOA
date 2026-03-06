// DOM refs
const productsEl = document.getElementById('products');
const cartItemsEl = document.getElementById('cartItems');
const totalEl = document.getElementById('total');
const statusEl = document.getElementById('status');

const API_URL = 'https://fakestoreapi.com/products';
const CART_KEY = 'cart'; // localStorage key

let products = []; // products from API
let cart = loadCart(); // cart from localStorage

init();

function init() {
  renderCart();
  fetchProducts();
}

// fetch products
function fetchProducts() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      products = data;
      statusEl.textContent = '';
      renderProducts(products);
      renderCart(); // update cart with real product info
    })
    .catch(err => {
      console.log(err);
      statusEl.textContent = 'Failed to load products.';
    });
}

// render product cards
function renderProducts(list) {
  productsEl.innerHTML = '';

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';

    const qty = cart[p.id] || 0;

    card.innerHTML = `
      <img src="${p.image}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="muted">${escapeHtml(shortText(p.description, 120))}</div>
      <div class="price">$${p.price}</div>
      <div class="row">
        <button class="btn-add" data-id="${p.id}">Add</button>
        <span class="qty">Qty: ${qty}</span>
      </div>
    `;

    productsEl.appendChild(card);
  });
}

// add product to cart (event delegation)
productsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;

  if (btn.classList.contains('btn-add')) {
    const id = Number(btn.dataset.id);
    addToCart(id);
  }
});

function addToCart(productId) {
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart(cart);
  renderProducts(products); // refresh qty on cards
  renderCart();
}

// render cart
function renderCart() {
  cartItemsEl.innerHTML = '';

  const ids = Object.keys(cart).map(Number);
  if (ids.length === 0) {
    cartItemsEl.innerHTML = `<div class="muted">Cart is empty</div>`;
    totalEl.textContent = '$0';
    return;
  }

  let total = 0;

  ids.forEach(id => {
    const product = products.find(p => p.id === id);
    const qty = cart[id];

    const title = product ? product.title : `Product #${id}`;
    const price = product ? product.price : 0;
    const img = product ? product.image : '';

    total += price * qty;

    const item = document.createElement('div');
    item.className = 'cart-item';

    item.innerHTML = `
      ${img ? `<img src="${img}" alt="${escapeHtml(title)}">` : ''}
      <div style="flex:1">
        <div class="title" style="margin:0">${escapeHtml(shortText(title, 40))}</div>
        <div class="muted">Qty: ${qty}${price ? ` • $${price}` : ''}</div>
      </div>
      <button class="btn-remove" data-id="${id}">Remove</button>
    `;

    cartItemsEl.appendChild(item);
  });

  totalEl.textContent = `$${round2(total)}`;
}

// remove from cart (event delegation)
cartItemsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;

  if (btn.classList.contains('btn-remove')) {
    const id = Number(btn.dataset.id);
    removeFromCart(id);
  }
});

function removeFromCart(productId) {
  if (!cart[productId]) return;

  cart[productId] -= 1;
  if (cart[productId] <= 0) delete cart[productId];

  saveCart(cart);
  renderProducts(products); // refresh qty on cards
  renderCart();
}

// localStorage helpers
function saveCart(cartObj) {
  localStorage.setItem(CART_KEY, JSON.stringify(cartObj));
}

function loadCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : {};
}

// small helpers
function shortText(str, max) {
  return str.length > max ? str.slice(0, max) + '...' : str;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}