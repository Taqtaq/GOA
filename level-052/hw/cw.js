// ---------- UI (რენდერი) ----------
const renderCars = (parent, cars) => {
  // კონტეინერის გასუფთავება
  parent.innerHTML = '';

  // DocumentFragment — სწრაფი ჩასმა DOM-ში
  const frag = document.createDocumentFragment();

  cars.forEach((car, index) => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.dataset.index = index; // ინდექსის შენახვა delete-ისთვის

    card.innerHTML = `
      <h3>${car.brand} ${car.model}</h3>
      <p>კატეგორია: ${car.category}</p>
      <p>წელი: ${car.year}</p>
      <p>ფასი: ${car.price}</p>
      <img src="${car.image}" width="150" alt="${car.brand} ${car.model}">
      <br>
      <button type="button" data-action="delete">Delete</button>
    `;

    frag.appendChild(card);
  });

  parent.appendChild(frag);
};

// ---------- Model ----------
class Car {
  constructor({ brand, model, category, year, price, image }) {
    this.brand = brand;
    this.model = model;
    this.category = category;
    this.year = Number(year);
    this.price = Number(price);
    this.image = image;
  }
}

// ---------- Manager (State + Filter + Render) ----------
class CarManager {
  constructor({ carsContainer }) {
    this._cars = [];
    this._carsContainer = carsContainer;

    // ფილტრების მდგომარეობა
    this._filters = {
      brand: 'all',
      category: 'all',
      minPrice: null,
      maxPrice: null,
    };

    // დელეგირებული delete (inline onclick-ის გარეშე)
    this._carsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="delete"]');
      if (!btn) return;

      const card = btn.closest('.car-card');
      if (!card) return;

      const index = Number(card.dataset.index);
      this.deleteCar(index);
    });
  }

  addCar(data) {
    // მანქანის დამატება
    this._cars.push(new Car(data));
    this.render();
  }

  deleteCar(index) {
    // მანქანის წაშლა
    this._cars.splice(index, 1);
    this.render();
  }

  setFilters(partial) {
    // ფილტრების განახლება
    this._filters = { ...this._filters, ...partial };
    this.render();
  }

  getFilteredCars() {
    // ფილტრაცია ბრენდით/კატეგორიით/ფასით
    const { brand, category, minPrice, maxPrice } = this._filters;

    return this._cars.filter((car) => {
      const okBrand = brand === 'all' ? true : car.brand.toLowerCase() === brand.toLowerCase();
      const okCategory = category === 'all' ? true : car.category.toLowerCase() === category.toLowerCase();

      const okMin = minPrice == null ? true : car.price >= Number(minPrice);
      const okMax = maxPrice == null ? true : car.price <= Number(maxPrice);

      return okBrand && okCategory && okMin && okMax;
    });
  }

  render() {
    // მხოლოდ გაფილტრული სია ირენდერება
    renderCars(this._carsContainer, this.getFilteredCars());
  }
}

// ---------- Init ----------
const form = document.querySelector('form');
const carsContainer = document.getElementById('cars');
const carManager = new CarManager({ carsContainer });

// ფილტრების ელემენტები (გააკეთე HTML-ში: #filterBrand #filterCategory #minPrice #maxPrice)
const filterBrand = document.getElementById('filterBrand');
const filterCategory = document.getElementById('filterCategory');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');

// ფორმის submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const brand = form.brand.value.trim();
  const model = form.model.value.trim();
  const category = form.category?.value?.trim() || 'Other'; // თუ category არ გაქვს, default
  const year = form.year.value;
  const price = form.price.value;
  const image = form.image.value.trim();

  carManager.addCar({ brand, model, category, year, price, image });
  form.reset();
});

// ფილტრების ივენთები
const applyFilters = () => {
  carManager.setFilters({
    brand: filterBrand?.value || 'all',
    category: filterCategory?.value || 'all',
    minPrice: minPriceInput?.value ? Number(minPriceInput.value) : null,
    maxPrice: maxPriceInput?.value ? Number(maxPriceInput.value) : null,
  });
};

filterBrand?.addEventListener('change', applyFilters);
filterCategory?.addEventListener('change', applyFilters);
minPriceInput?.addEventListener('input', applyFilters);
maxPriceInput?.addEventListener('input', applyFilters);
