//1
function openOrSenior(data){
  result = []
  data.forEach(x => {if(x[0] >= 55 && x[1] > 7){
    result.push("Senior");
    
  }else{
    result.push('Open')
  }})
  return result
}
//2
function oddOrEven(array) {
   if (array.length === 0){
     return "even";
   }
  const sum = array.reduce((acc, num) => acc + num, 0);
  if(sum % 2 === 0){
    return "even";
  }
  else{
    return "odd";
  }
}

//3
function solution(num){
  const roman = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],       //1990 - 1000 = 990 - 900 = 90 - 90 = 0
      ["L", 50],        //MCMXC
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
  ];

  let result = ""; 
  for (let [symbol, value] of roman) {
      while (num >= value) {
          result += symbol; // რიმული სიმბოლო დამატება
          num -= value;     // მნიშვნელობის გამოკლება
      }
  }
  return result; // აბრუნებს საბოლოო რიცხვს რიმულით

}
console.log(romanize(1990)); // "MCMXC   