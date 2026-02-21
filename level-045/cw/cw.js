//1
function compareArrays(arr1, arr2) {
  let commonCount = 0;        // საერთო ელემენტების რაოდენობა
  let onlyOneCount = 0;      // მხოლოდ ერთ მასივში არსებული ელემენტები
  let remainingArr1 = 0;     // arr1-ში დარჩენილი ელემენტები
  let remainingArr2 = 0;     // arr2-ში დარჩენილი ელემენტები

  // ვამოწმებთ arr1-ის ელემენტებს
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonCount++;         // თუ ორივეშია → საერთო
    } else {
      remainingArr1++;      // თუ მხოლოდ arr1-შია
      onlyOneCount++;
    }
  }

  // ვამოწმებთ arr2-ის ელემენტებს
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      remainingArr2++;      // თუ მხოლოდ arr2-შია
      onlyOneCount++;
    }
  }

  return [commonCount, onlyOneCount, remainingArr1, remainingArr2];
}

// მაგალითი
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [2, 4, 6, 8, 10, 12, 14];

const result = compareArrays(arr1, arr2);
console.log(result); // [4, 8, 5, 3]

//2
function filter_list(arr) {
  const result = []; // ახალი მასივი მხოლოდ რიცხვებისთვის

  for (let i = 0; i < arr.length; i++) {
    // typeof ამოწმებს მონაცემის ტიპს
    if (typeof arr[i] === "number") {
      result.push(arr[i]); // თუ რიცხვია, ვამატებთ
    }
  }

  return result;
}

// ტესტები
console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
//3
function isPangram(sentence) {
  // ალფავიტის ყველა ასო
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // ვაქცევთ სტრინგს lowercase-ად
  const lower = sentence.toLowerCase();

  // ვამოწმებთ ყველა ასოს
  for (let i = 0; i < alphabet.length; i++) {
    // თუ რომელიმე ასო არ მოიძებნა
    if (!lower.includes(alphabet[i])) {
      return false;
    }
  }

  // თუ ყველა ასო მოიძებნა
  return true;
}

// ტესტები
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello world")); // false
//4
function sentenceCalculator(str) {
  let sum = 0; // საბოლოო ჯამი

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // თუ lowercase ასოა (a-z)
    if (char >= 'a' && char <= 'z') {
      sum += char.charCodeAt(0) - 96;
    }
    // თუ uppercase ასოა (A-Z)
    else if (char >= 'A' && char <= 'Z') {
      sum += (char.charCodeAt(0) - 64) * 2;
    }
    // თუ ციფრია (0-9)
    else if (char >= '0' && char <= '9') {
      sum += Number(char);
    }
    // სხვა სიმბოლოებს 0 მნიშვნელობა აქვთ
  }

  return sum;
}

//5
function vowelCountInAllSubstrings(s) {
  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
  const n = s.length;
  let total = 0;

  // თითოეული სიმბოლოს "წვლილი" ვითვლით
  for (let i = 0; i < n; i++) {
    // თუ ეს სიმბოლო ხმოვანია
    if (vowels.has(s[i])) {
      // რამდენი substring შეიცავს i ინდექსზე მდგომ სიმბოლოს
      // დასაწყისი: 0..i => (i+1) ვარიანტი
      // დასასრული: i..n-1 => (n-i) ვარიანტი
      total += (i + 1) * (n - i);
    }
  }

  return total;
}

