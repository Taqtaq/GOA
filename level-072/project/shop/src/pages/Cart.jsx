import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <img src={item.image} alt={item.title} width="80" />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;