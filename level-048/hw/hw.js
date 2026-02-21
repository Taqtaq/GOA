//1
function cleanString(str) {
  const stack = [];

  for (let char of str) {
    if (char === '#') {
      stack.pop(); // удаляем последний символ
    } else {
      stack.push(char); // добавляем символ
    }
  }

  return stack.join('');
}
//2
function solution(string) {
  // თუ სტრინგი ცარიელია, უბრალოდ ვაბრუნებთ მას
  let result = '';

  // თითოეულ სიმბოლოზე ვატარებთ ციკლს
  for (let i = 0; i < string.length; i++) {
    // თუ სიმბოლო არის დიდი ასო, წინ ვუმატებთ space-ს
    if (string[i] >= 'A' && string[i] <= 'Z') {
      result += ' ' + string[i];
    } else {
      // სხვა შემთხვევაში უბრალოდ ვამატებთ სიმბოლოს
      result += string[i];
    }
  }

  // საბოლოო შედეგის დაბრუნება
  return result;
}
//3
function mineLocation(field) {
  // ვატარებთ ციკლს თითოეულ რიგზე
  for (let i = 0; i < field.length; i++) {
    // ვატარებთ ციკლს თითოეულ სვეტზე
    for (let j = 0; j < field[i].length; j++) {
      // თუ ვხვდებით 1-ს, ანუ ბომბს
      if (field[i][j] === 1) {
        return [i, j]; // ვაბრუნებთ რიგის და სვეტის ინდექსებს
      }
    }
  }
  // ბომბი უნდა იყოს, ასე რომ ეს აქ წესით არასდროს შესრულდება
  return null;
}
//4
function validPhoneNumber(phoneNumber){

  // რეგულარული გამოსახულება უნდა შეესაბამებოდეს ფორმატს (XXX) XXX-XXXX
  // \( \) -> ღილაკი \( და \) უნდა იყოს სპეციფიკურად
  // \d{3} -> 3 ციფრი
  // - შორის არის space
  // \d{3}-\d{4} -> 3 ციფრი, ტირე, 4 ციფრი
  const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
  
  // ტესტირება თუ სტრინგი შეესაბამება
  return regex.test(phoneNumber);
}
//5
function longestPalindrome(s){
if (s.length === 0) return 0;

  let maxLength = 1; // მინიმუმ ერთი ასო თვითონ პალინდრომია

  // გავცდით ყველა შესაძლო substring-ს
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substr = s.slice(i, j + 1); // ამოვიღებთ substring-ს
      const reversed = substr.split('').reverse().join(''); // შევუწყვეთ უკუღმა
      if (substr === reversed) {
        maxLength = Math.max(maxLength, substr.length); // შევადარებთ მაქსიმალს
      }
    }
  }

  return maxLength;}
  //6
  function isValidIP(ip) {
  // ვყოფთ სტრინგს წერტილებით
  const parts = ip.split('.');
  
  // უნდა იყოს მხოლოდ 4 ნაწილად
  if (parts.length !== 4) return false;

  for (let part of parts) {
    // თუ ციფრები არაა ან ცარიელია
    if (!/^\d+$/.test(part)) return false;

    // თუ აქვს წინა ნულები, როგორც 01, 002
    if (part.length > 1 && part[0] === '0') return false;

    const num = Number(part);
    // უნდა იყოს 0–დან 255-მდე
    if (num < 0 || num > 255) return false;
  }

  return true;
}