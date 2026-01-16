
//3
function greet(name){
    alert('Hello ' + name);
}

let userName = prompt('Enter your name:');

if (userName === null || userName === ''){
    greet('Guest')
} 
else {
    greet(userName);
}
