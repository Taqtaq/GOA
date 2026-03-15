import Animal from './components/Animal.jsx';

function App() {
  const animals = [
    { id: 1, name: "Lion", sound: "Roar", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Cat", sound: "Meow", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Dog", sound: "Bark", image: "https://via.placeholder.com/100" },
  ];

  return (
    <div>
      <h1>Animals</h1>
      {animals.map(animal => (
        <Animal
          key={animal.id}
          name={animal.name}
          sound={animal.sound}
          image={animal.image}
        />
      ))}
    </div>
  );
}

export default App;
