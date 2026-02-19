function solve(arr) {
  const set = new Set(arr);
  const used = new Set();
  let start = arr.find(x => !set.has(x * 3) && (!Number.isInteger(x / 2) || !set.has(x / 2)));

  const result = [start];
  used.add(start);

  while (result.length < arr.length) {
    const curr = result[result.length - 1];

    if (curr % 3 === 0 && set.has(curr / 3) && !used.has(curr / 3)) {
      result.push(curr / 3);
      used.add(curr / 3);
    } else if (set.has(curr * 2) && !used.has(curr * 2)) {
      result.push(curr * 2);
      used.add(curr * 2);
    }
  }

  return result;
}
