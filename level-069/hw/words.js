const { generate } = require("random-words");

// short comment
function getRandomWord() {
  return generate();
}

module.exports = getRandomWord;