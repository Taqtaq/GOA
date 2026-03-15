function createElement(tagName, attributes) {
  const element = document.createElement(tagName);

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  return element;
}