//1

function manualReduce(arr, callback, initialValue) {
  // ცარიელი მასივის შემოწმება
  if (arr.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let acc;
  let startIndex;

  // თუ initialValue გადმოგვეცა, acc = initialValue-დან იწყება
  if (initialValue !== undefined) {
    acc = initialValue;
    startIndex = 0;
  } else {
    // თუ initialValue არ გვაქვს, პირველი ელემენტი ხდება accumulator
    acc = arr[0];
    startIndex = 1;
  }

  // ვუვლით მასივს და accumulator-ს ვანახლებთ callback-ის შედეგით
  for (let i = startIndex; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
}


//2
class Account{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
      login(email, password) {
    // ვამოწმებთ ემთხვევა თუ არა ობიექტის email და password
    if (this.email === email && this.password === password) {
      console.log("Succesfully logged in");
    } else {
      console.log("Invalid email or password");
    }
  }

}
const acc1 = new Account("Nika", 'nika@gmail.com','12345')
const acc12 = new Account("Nika2", 'nika@gmail.com','12345')
const acc123 = new Account("Nika3", 'nika@gmail.com','12345')
console.log(acc1)
console.log(acc12)
console.log(acc123)
acc1.login('nika@gmail.com','12345')
acc1.login('nika@gmail.com','123456')
