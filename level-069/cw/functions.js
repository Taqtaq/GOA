// Named export vs default export (ES Modules):
// named export-ში ერთ ფაილიდან რამდენიმე მნიშვნელობის გატანა შეიძლება სახელებით,
// ხოლო default export-ში ძირითადად ერთი მთავარი მნიშვნელობა გადის default-ად.

// CommonJS (module.exports / require) vs ES Modules (import / export):
// CommonJS ძირითადად Node.js-ის ტრადიციული მოდულური სისტემაა.
// აქ ვიყენებთ module.exports-ს გასატანად და require-ს შემოსატანად.
// ES Modules-ში გამოიყენება export / import სინტაქსი.

// მოკლედ:
// export / import  -> ES Modules
// module.exports / require -> CommonJS

function sumOfNumbers(arr) {
  // Sum numbers
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function factorial(num) {
  // Calculate factorial
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  }

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

function guessNum(userNum) {
  // Random number 1 to 10
  const randomNum = Math.floor(Math.random() * 10) + 1;

  if (userNum === randomNum) {
    return "You have guessed the number correctly";
  } else {
    return "You lost, try again";
  }
}

function returnLengthOfArr(arr) {
  // Return array length
  return arr.length;
}

// აქ ყველა ფუნქციას ერთ ობიექტში ვიტანთ გარეთ.
// შემდეგ სხვა ფაილში require-ით შემოვიტანთ.
module.exports = {
  sumOfNumbers,
  factorial,
  guessNum,
  returnLengthOfArr,
};