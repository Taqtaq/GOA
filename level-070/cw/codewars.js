//1
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
}
//2
function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x));
}
//3 XOR
function findOdd(A) {
  
  return A.reduce((a,b) => a ^ b);
}
//4
function duplicateEncode(word){
    word = word.toLowerCase();
  const count = {};
  for (const ch of word){
    count[ch] = (count[ch] || 0) + 1
  }
  let result = ''
  for (const ch of word){
    result += count[ch] === 1 ? '(' :')';
  }
    return result;
}
//5
function solution(str) {
    const result = [];
    for (let i = 0; i < str.length; i+= 2){
        result.push(str[i] + (str[i+1] || '_'))
    }
    return result
}
