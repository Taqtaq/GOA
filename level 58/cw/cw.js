//1
let seconds = 0;
let intervalId = setInterval(() => {
    seconds++;
    console.log(`გავიდა ${seconds} წამი`);
    if (seconds === 10){
        clearInterval(intervalId);
        console.log('Times Up');
    }
},1000)

//2
// index.html

//3
// index2.html