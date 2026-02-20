// 1
// 7 kyu
// V A P O R C O D E4

function vaporcode(string) {
     return string
    .replace(/ /g, "")   
    .toUpperCase()         
    .split("")            
    .join("  ");   
}

// 2
// 7 kyu
// String ends with?
function solution(str, ending) {
  if (ending === "") return true;
  return str.slice(-ending.length) === ending;
}

// 3
// 7 kyu
// Complementary DNA
function dnaStrand(dna) {
  const map = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  return dna
    .split("")
    .map(char => map[char])
    .join("");
}

// 4
// 7 kyu
// Name Array Capping
function capMe(names) {
  return names.map(name =>
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
}

//6
// 7 kyu
// Only one
function onlyOne(...flags) {
    let count = flags.filter(s => s === true).length;
    return count === 1;

}