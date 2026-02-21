//1
function mostMoney(students) {
  if (students.length === 1) {
    return students[0].name;
  }

  function totalMoney(student) {
    return student.fives * 5 +
           student.tens * 10 +
           student.twenties * 20;
  }

  let maxMoney = totalMoney(students[0]);
  let richestStudent = students[0].name;
  let allEqual = true;

  for (let i = 1; i < students.length; i++) {
    const currentMoney = totalMoney(students[i]);

    if (currentMoney > maxMoney) {
      maxMoney = currentMoney;
      richestStudent = students[i].name;
      allEqual = false;
    }

    if (currentMoney !== maxMoney) {
      allEqual = false;
    }
  }

  return allEqual ? "all" : richestStudent;
}
//2
function uniqCount(str) {
  const s = str.toLowerCase();
  const n = s.length;

  const freq = new Map();
  for (const ch of s) freq.set(ch, (freq.get(ch) || 0) + 1);

  const fact = (k) => {
    let res = 1n;
    for (let i = 2n; i <= BigInt(k); i++) res *= i;
    return res;
  };

  // n! / (c1! * c2! * ...)
  let result = fact(n);
  for (const c of freq.values()) {
    result /= fact(c); 
  }
  return result;
}

console.log(uniqCount("AB"));    // 2n

//3
function solve(n) {
  const N = n;

  const digitSum = (x) => {
    let sum = 0;
    for (const ch of x.toString()) {
      sum += ch.charCodeAt(0) - 48;
    }
    return sum;
  };

  let best = digitSum(N); // a = 0 case

  let pow10 = 1;
  const len = N.toString().length;

  for (let i = 1; i <= len; i++) {
    pow10 *= 10;          // 10^i
    const a = pow10 - 1;  // 9, 99, 999, ...

    if (a > N) break;

    const b = N - a;
    best = Math.max(best, digitSum(a) + digitSum(b));
  }

  return best;
}
//4
function rotate(matrix, direction) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const res = Array.from({ length: cols }, () => Array(rows));

  if (direction === "clockwise") {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        res[j][rows - 1 - i] = matrix[i][j]; // 
      }
    }
  } else {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        res[cols - 1 - j][i] = matrix[i][j]; // 
      }
    }
  }

  return res;
}
