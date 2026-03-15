function Products() {

  // პროდუქტის ინფორმაცია
  const product = {
    name: "Laptop",
    price: "$1200",
    category: "Electronics",
    image: "https://via.placeholder.com/150"
  };

  return (
    <div>

      {/* პროდუქტის სურათი */}
      <img src={product.image} alt={product.name} />

      {/* პროდუქტის სახელი */}
      <h2>{product.name}</h2>

      {/* პროდუქტის ფასი */}
      <p>Price: {product.price}</p>

      {/* პროდუქტის კატეგორია */}
      <p>Category: {product.category}</p>

    </div>
  );
}

export default Products;
