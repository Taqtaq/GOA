// მონაცემების გასაღებები localStorage-ში
const STORAGE_KEY_PRODUCTS = "products_v1";
const STORAGE_KEY_LAST_ID = "products_last_id_v1";

// პროდუქტების მასივი
let products = [];

// რედაქტირების რეჟიმის id
let editingId = null;

// DOM ელემენტები
const formTitle = document.getElementById("formTitle");
const modeText = document.getElementById("modeText");

const productForm = document.getElementById("productForm");
const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
const descInput = document.getElementById("descInput");

const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

const tbody = document.getElementById("tbody");
const empty = document.getElementById("empty");

// localStorage-დან ჩატვირთვა
function loadFromStorage() {
  const rawProducts = localStorage.getItem(STORAGE_KEY_PRODUCTS);
  products = rawProducts ? JSON.parse(rawProducts) : [];
}

// localStorage-ში შენახვა
function saveToStorage() {
  localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(products));
}

// უნიკალური id-ის გენერაცია
function nextId() {
  const rawLast = localStorage.getItem(STORAGE_KEY_LAST_ID);
  const last = rawLast ? Number(rawLast) : 0;
  const newId = last + 1;
  localStorage.setItem(STORAGE_KEY_LAST_ID, String(newId));
  return newId;
}

// ფორმის გასუფთავება
function resetForm() {
  nameInput.value = "";
  priceInput.value = "";
  descInput.value = "";
}

// add რეჟიმზე დაბრუნება
function setAddMode() {
  editingId = null;
  formTitle.textContent = "Add product";
  modeText.textContent = "Mode: Add";
  submitBtn.textContent = "Add";
  cancelBtn.classList.add("hidden");
  resetForm();
  nameInput.focus();
}

// edit რეჟიმზე გადასვლა
function setEditMode(product) {
  editingId = product.id;
  formTitle.textContent = `Edit product #${product.id}`;
  modeText.textContent = "Mode: Edit";
  submitBtn.textContent = "Save";
  cancelBtn.classList.remove("hidden");

  nameInput.value = product.name;
  priceInput.value = String(product.price);
  descInput.value = product.description;
  nameInput.focus();
}

// ცხრილის დახატვა
function renderTable() {
  tbody.innerHTML = "";

  if (products.length === 0) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  for (const p of products) {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = p.id;

    const tdName = document.createElement("td");
    tdName.textContent = p.name;

    const tdPrice = document.createElement("td");
    tdPrice.textContent = Number(p.price).toFixed(2);

    const tdDesc = document.createElement("td");
    tdDesc.textContent = p.description;

    const tdActions = document.createElement("td");
    const actions = document.createElement("div");
    actions.className = "rowActions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "smallBtn secondary";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      const found = products.find(x => x.id === p.id);
      if (!found) return;
      setEditMode(found);
    });

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "smallBtn danger";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      deleteById(p.id);
    });

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);
    tdActions.appendChild(actions);

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdDesc);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);
  }
}

// ახალი პროდუქტის დამატება
function addProduct({ name, price, description }) {
  const product = {
    id: nextId(),
    name,
    price,
    description
  };

  products.push(product);
  saveToStorage();
  renderTable();
}

// პროდუქტის განახლება id-ის მიხედვით
function updateProductById(id, { name, price, description }) {
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return false;

  products[idx] = { ...products[idx], name, price, description };
  saveToStorage();
  renderTable();
  return true;
}

// პროდუქტის წაშლა id-ის მიხედვით
function deleteById(id) {
  products = products.filter(p => p.id !== id);
  saveToStorage();
  renderTable();

  if (editingId === id) {
    setAddMode();
  }
}

// მონაცემების ვალიდაცია და მიღება ფორმიდან
function getFormData() {
  const name = nameInput.value.trim();
  const priceRaw = priceInput.value.trim();
  const description = descInput.value.trim();

  if (!name || !priceRaw || !description) return null;

  const price = Number(priceRaw);
  if (Number.isNaN(price) || price < 0) return null;

  return { name, price, description };
}

// submit ლოგიკა (Add ან Save)
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = getFormData();
  if (!data) return;

  if (editingId === null) {
    addProduct(data);
    setAddMode();
    return;
  }

  const ok = updateProductById(editingId, data);
  if (ok) setAddMode();
});

// cancel ლოგიკა
cancelBtn.addEventListener("click", () => {
  setAddMode();
});

// ყველაფრის წაშლა
clearAllBtn.addEventListener("click", () => {
  products = [];
  saveToStorage();
  renderTable();
  setAddMode();
});

// საწყისი ჩატვირთვა
loadFromStorage();
renderTable();
setAddMode();