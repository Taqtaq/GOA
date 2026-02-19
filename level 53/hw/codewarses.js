//1
//7 kyu String Scramble
function scramble(str, arr) {
      let result = new Array(str.length);

    for (let i = 0; i < str.length; i++) {
        result[arr[i]] = str[i];
    }

    return result.join('');
};

//2
// 7 kyu Sum of array singles
function repeats(arr){
    let counts = {};
    let sum = 0;

    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (let num in counts) {
        if (counts[num] === 1) {
            sum += Number(num);
        }
    }
};
repeats([4,5,7,5,4,8]) // 15

//3
//7 kyu Stanton measure
function stantonMeasure(a){
  let countOnes = 0;
  for (let num of a) {
    if (num === 1) {
        countOnes++;
    }
  }
  let result = 0;
  for (let num of a) {
    if (num === countOnes) {
        result++;
    }
  }
  return result;
}

//4
// 7 kyu Average Array
function avgArray(arr) {
    let result = [];
    let rows = arr.length;
    let cols = arr[0].length;

    for (let i = 0; i < cols; i++) {
        let sum = 0;
        for (let j = 0; j < rows; j++) {
            sum += arr[j][i];
        }
        result.push(sum / rows);
    }
    return result;
}

//5
// 6 kyu
// Bracket Duplicates
function stringParse(string){
    if (typeof string !== "string") {
        return "Please enter a valid string";
    }

    let result = "";
    let i = 0;

    while(i < string.length){
        let count = 1;

        while(i + count < string.length && string[i] === string[i + count]){
            count++;
        }
        if (count<=2){
            result += string[i].repeat(count);
        } else {
            result += string[i].repeat(2);
            result += "[" + string[i].repeat(count - 2) + "]";
        }
        i += count;
    }
    return result
}

//6
// ეს გაკეთბულია

//7
// 6 kyu
// One down
function oneDown(str) {
  if (typeof str !== "string") return "Input is not a string";

  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let res = "";

  for (const ch of str) {
    const i = alpha.indexOf(ch);

    // თუ ასო არ არის, უცვლელად დავტოვოთ
    if (i === -1) {
      res += ch;
      continue;
    }

    // ერთი ნაბიჯით უკან (ციკლურად)
    res += alpha[(i - 1 + alpha.length) % alpha.length];
  }

  return res;
}

