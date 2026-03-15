import { useState } from "react";

function ShowSecretMessage() {

  // ცვლადი რომელიც ინახავს უნდა ვაჩვენოთ თუ არა საიდუმლო ტექსტი
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  // თუ showSecretMessage არის true
  if (showSecretMessage === true) {
    return <p>This is a secret message</p>;
  }

  // სხვა შემთხვევაში ვაჩვენებთ ღილაკს
  return (
    <button onClick={() => setShowSecretMessage(true)}>
      Show Secret Message
    </button>
  );
}

export default ShowSecretMessage;
