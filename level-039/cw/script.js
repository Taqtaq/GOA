//1
const ageInput = document.getElementById('ageInput');
const checkBtn = document.getElementById('checkBtn');

checkBtn.addEventListener('click',() => {
    const age = Number(ageInput.value);
    if (age >= 18) {
        alert('You can enter website');
    }
    else {
        alert('You cant enter website');
    }
});
//2
// როცა:
// ვადარებთ ერთ ცვლადს ბევრ მნიშვნელობას
// ყველა შედარება არის === (ზუსტი თანხვედრა)
// კოდი ხდება უფრო წაკითხვადი
// ბევრი else if გროვდება
