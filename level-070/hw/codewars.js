//1
function inArray(a1, a2) {
  return a1
    .filter(a => a2.some(b => b.includes(a)))
    .sort();
}
//2
function sortByBit(arr) {
  return arr.sort((a, b) => {
    const bitsA = a.toString(2).split('1').length - 1
    const bitsB = b.toString(2).split('1').length - 1

    if (bitsA === bitsB) {
      return a - b
    }

    return bitsA - bitsB
  })
}
//3
function isAlt(word) {
  const vowels = "aeiou";

  for (let i = 0; i < word.length - 1; i++) {
    const curr = vowels.includes(word[i]);
    const next = vowels.includes(word[i + 1]);

    if (curr === next) {
      return false;
    }
  }

  return true;
}
//4
function multiplicationTable(size) {
  const result = [];

  for (let i = 1; i <= size; i++) {
    const row = [];

    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }

    result.push(row);
  }

  return result;
}
//5
function add(num1, num2) {
  let a = String(num1);
  let b = String(num2);
  let result = "";

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let digitA = i >= 0 ? Number(a[i]) : 0;
    let digitB = j >= 0 ? Number(b[j]) : 0;

    result = String(digitA + digitB) + result;

    i--;
    j--;
  }

  return Number(result);
}