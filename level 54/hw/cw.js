// 6 kyu
// Fix array sequence

function f(n) {
  var [a,b]=[0,0];
  while(n%2===0) {a++; n/=2;}
  while(n%3===0) {b++; n/=3;}
  return [a,b,n];
}

function solve(arr){
  return arr.map(f).sort((a,b)=>b[1]-a[1]||a[0]-b[0]).map(([a,b,r])=>r*2**a*3**b);
}