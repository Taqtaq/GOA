export default function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1200,
      description: "Powerful laptop for work and gaming",
      image: "https://picsum.photos/200?1",
    },
    {
      id: 2,
      name: "Phone",
      price: 800,
      description: "Modern smartphone with great camera",
      image: "https://picsum.photos/200?2",
    },
    {
      id: 3,
      name: "Headphones",
      price: 150,
      description: "Noise cancelling headphones",
      image: "https://picsum.photos/200?3",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 100,
      description: "Mechanical keyboard",
      image: "https://picsum.photos/200?4",
    },
    {
      id: 5,
      name: "Mouse",
      price: 70,
      description: "Wireless gaming mouse",
      image: "https://picsum.photos/200?5",
    },
    {
      id: 6,
      name: "Monitor",
      price: 300,
      description: "27 inch 4K monitor",
      image: "https://picsum.photos/200?6",
    },
    {
      id: 7,
      name: "Tablet",
      price: 400,
      description: "Portable tablet for work",
      image: "https://picsum.photos/200?7",
    },
    {
      id: 8,
      name: "Smart Watch",
      price: 200,
      description: "Fitness and health tracking",
      image: "https://picsum.photos/200?8",
    },
    {
      id: 9,
      name: "Speaker",
      price: 120,
      description: "Bluetooth portable speaker",
      image: "https://picsum.photos/200?9",
    },
    {
      id: 10,
      name: "Camera",
      price: 900,
      description: "Professional digital camera",
      image: "https://picsum.photos/200?10",
    },
  ];

  const names = ["Nika", "Giorgi", "Ana", "Luka", "Dato"];

  return (
    <div className="App">
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}$</p>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} width="150" />
        </div>
      ))}

      <h1>Names</h1>

      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}
