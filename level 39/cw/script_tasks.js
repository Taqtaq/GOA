// Task 1
function checker(num) {
    if (num % 2 === 0) {
        return("Even");
    }
    else {
        return("Odd");
    }
}
console.log( checker(4)); // "Even"
console.log( checker(7)); // "Odd"

// Task 2

function gradeChecker(score) {
    if (score >= 90) {
        return "A";}
    else if (score >= 80) {
        return "B";}
    else if (score >= 70) {
        return "C";}
    else if (score >= 60) {
        return "D";}
    else {
        return "F";}
    }

// Task 3
function filterLongWords(words) {
    let result = [];

    for (let i = 0; i<words.length; i++){
        if (words[i].length > 4){
            result.push(words[i]);
        }
    }
    return result;
}
console.log(
    filterLongWords(["hi", "world", "cat", "javascript", "sun"])
);
// ["world", "javascript"]
