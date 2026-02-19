const renderCars = (parent, cars) => {
    parent.innerHTML = '';

    cars.forEach((car, index) => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';

        const title = document.createElement('h3');
        title.textContent = `${car.brand} ${car.model}`;
        carCard.appendChild(title);

        const year = document.createElement('p');
        year.textContent = `Year: ${car.year}`;
        carCard.appendChild(year);

        const price = document.createElement('p');
        price.textContent = `Price: ${car.price}`;
        carCard.appendChild(price);

        const img = document.createElement('img');
        img.src = car.image;
        img.width = 150;
        carCard.appendChild(img);

        carCard.appendChild(document.createElement('br'));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            carManager.deleteCar(index);
        });
        carCard.appendChild(deleteBtn);

        parent.appendChild(carCard);
    });
};
