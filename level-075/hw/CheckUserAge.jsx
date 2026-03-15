function CheckUserAge() {

  // ცვლადი age სადაც ვინახავთ ასაკს
  const age = 20;

  // თუ ასაკი არის 18 ან მეტი
  if (age >= 18) {
    return <p>You are an adult</p>;
  }

  // სხვა შემთხვევაში
  return <p>You are a kid</p>;
}

export default CheckUserAge;
