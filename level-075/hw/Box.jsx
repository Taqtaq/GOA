function Box() {

  // ფუნქცია რომელიც აბრუნებს შემთხვევით ფერს
  function getRandomColor() {

    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
  }

  // ვაბრუნებთ div ელემენტს რომელსაც აქვს სიგანე სიმაღლე და შემთხვევითი უკანა ფერი
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: getRandomColor(),
        margin: "10px"
      }}
    ></div>
  );
}

export default Box;
