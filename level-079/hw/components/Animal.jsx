function Animal({ name, sound, image }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h2>{name}</h2>
      <p>Sound: {sound}</p>
      <img src={image} alt={name} />
    </div>
  );
}

export default Animal;
