// ---------- Product კლასი ----------
class Product {
  constructor(name, price, description, image = '') {
    // პროდუქტის სახელი
    this.name = name;

    // ფასი (რიცხვად გადავიყვანოთ)
    this.price = Number(price);

    // აღწერა
    this.description = description;

    // სურათი (არასავალდებულო)
    this.image = image;
  }
}

// ---------- CartManager კლასი ----------
class CartManager {
  constructor(cartContainer, totalEl) {
    // კალათის ელემენტები: [{ product, quantity }]
    this._items = [];

    // სად დავხატოთ კალათა
    this._cartContainer = cartContainer;

    // სად გამოვიტანოთ total
    this._totalEl = totalEl;

    // ერთჯერადად დავაყენოთ click დელეგაცია (ოპტიმიზაცია)
    this._cartContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;

      const action = btn.dataset.action;
      const name = btn.dataset.name;

      if (action === 'inc') this.increase(name);
      if (action === 'dec') this.decrease(name);
      if (action === 'remove') this.remove(name);
    });
  }

  add(product) {
    // ვიპოვოთ უკვე თუ არის კალათაში
    const found = this._items.find(i => i.product.name === product.name);

    if (found) {
      // თუ არის — რაოდენობა გავზარდოთ
      found.quantity += 1;
    } else {
      // თუ არა — ახალი item დავამატოთ
      this._items.push({ product, quantity: 1 });
    }

    this.render();
  }

  remove(productName) {
    // კალათიდან წაშლა (მთლიანად)
    this._items = this._items.filter(i => i.product.name !== productName);
    this.render();
  }

  increase(productName) {
    // რაოდენობის გაზრდა
    const item = this._items.find(i => i.product.name === productName);
    if (!item) return;

    item.quantity += 1;
    this.render();
  }

  decrease(productName) {
    // რაოდენობის შემცირება (0-ზე რომ ჩამოვა — ამოვშალოთ)
    const item = this._items.find(i => i.product.name === productName);
    if (!item) return;

    item.quantity -= 1;

    if (item.quantity <= 0) {
      this.remove(productName);
      return;
    }

    this.render();
  }

  clearCart() {
    // კალათის სრულად გასუფთავება
    this._items = [];
    this.render();
  }

  getTotal() {
    // საბოლოო ფასის დათვლა
    return this._items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }

  render() {
    // კალათის დახატვა
    this._cartContainer.innerHTML = '';

    const frag = document.createDocumentFragment();

    this._items.forEach(({ product, quantity }) => {
      const row = document.createElement('div');
      row.className = 'cart-row';

      row.innerHTML = `
        <b>${product.name}</b> — ${product.price}₾
        <br>
        <small>${product.description}</small>
        <br>
        რაოდენობა: <b>${quantity}</b>
        <br>
        <button data-action="dec" data-name="${product.name}">-</button>
        <button data-action="inc" data-name="${product.name}">+</button>
        <button data-action="remove" data-name="${product.name}">Remove</button>
        <hr>
      `;

      frag.appendChild(row);
    });

    this._cartContainer.appendChild(frag);

    // total განახლება
    this._totalEl.textContent = this.getTotal().toFixed(2);
  }
}

// ---------- Products UI (მაგალითი) ----------
const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');
const totalEl = document.getElementById('total');
const clearBtn = document.getElementById('clearCart');

// CartManager ინიციალიზაცია
const cartManager = new CartManager(cartContainer, totalEl);

// პროდუქტის სია (მაგალითისთვის)
const products = [
  new Product('iPhone 15', 2500, 'Apple smartphone'),
  new Product('AirPods', 550, 'Wireless earphones'),
  new Product('MacBook', 5200, 'Laptop for work'),
];

// პროდუქტების დახატვა
const renderProducts = (parent, products) => {
  // კონტეინერის გასუფთავება
  parent.innerHTML = '';

  const frag = document.createDocumentFragment();

  products.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p><b>${p.price}₾</b></p>
      <button type="button" data-add="${p.name}">Add to cart</button>
      <hr>
    `;

    frag.appendChild(card);
  });

  parent.appendChild(frag);

  // დელეგაცია — "Add to cart"
  parent.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-add]');
  if (!btn) return;

  const name = btn.dataset.add;
  const product = products.find(x => x.name === name);
  if (!product) return;

  cartManager.add(product);
});

};

renderProducts(productsContainer, products);

// Clear cart ღილაკი
clearBtn.addEventListener('click', () => {
  cartManager.clearCart();
});
