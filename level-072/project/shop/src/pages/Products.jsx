import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart");
  }
  return (
    <div>
      <h1>Products</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              width: "200px",
            }}
          >
            <img src={product.image} alt={product.title} width="100" />

            <h3>{product.title}</h3>

            <p>Price: ${product.price}</p>

            <p>Category: {product.category}</p>

            <button onClick={() => addToCart(product)}>Add to Cart</button>          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;