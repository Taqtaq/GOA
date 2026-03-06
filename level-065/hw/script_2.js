function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Number is greater than 10");
    } else {
      reject("Number is 10 or less");
    }
  });
}

checkNumber(15)
  .then(res => console.log(res))
  .catch(err => console.log(err));

checkNumber(5)
  .then(res => console.log(res))
  .catch(err => console.log(err));