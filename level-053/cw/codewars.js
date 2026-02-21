//1
function swapHeadAndTail(arr) {
    const len = arr.length;
    
    if (len <= 1) return arr.slice(); // возвращаем копию
    
    const mid = Math.floor(len / 2);
    
    if (len % 2 === 0) {
        return arr.slice(mid).concat(arr.slice(0, mid));
    } else {
        return arr.slice(mid + 1)
                  .concat(arr[mid])
                  .concat(arr.slice(0, mid));
    }
}
//2
function diff(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i]) && !result.includes(a[i])) {
      result.push(a[i]);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i]) && !result.includes(b[i])) {
      result.push(b[i]);
    }
  }

  return result.sort();
}
//3
function sortArray(arr) {
  if (typeof arr === 'string') {
    arr = arr.split('').map(Number); // ['5','4','3'] -> [5,4,3]
  }
  
  arr.sort((a, b) => a - b);

  if (typeof arr[0] === 'number') {
    return arr.join('');
  }

  return arr;
}
//4
function consecutive(arr) {
  if (arr.length <= 1) return 0;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return (max - min + 1) - arr.length;
}
//5
function sortList(sortBy, list) {
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
}
