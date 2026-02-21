// DOM-იდან ვიღებთ ფორმას id="formElement" მიხედვით
// ეს ფორმა გამოიყენება პროდუქტის დამატებისას submit მოვლენაზე
const form = document.getElementById('formElement');

// DOM-იდან ვიღებთ <tbody> ელემენტს, სადაც ცხრილში პროდუქტების რიგებს დავამატებთ
const tbody = document.getElementById('tbody');

// localStorage-დან ვიღებთ "products" გასაღებს
// localStorage ინახავს მონაცემებს ტექსტურად (string), ამიტომ ვაკეთებთ JSON.parse-ს
// თუ "products" არ არსებობს (null ბრუნდება), ვიყენებთ ცარიელ მასივს []
const products = JSON.parse(localStorage.getItem('products')) || [];

// ფუნქცია: ახალი პროდუქტის დამატება მასივში + localStorage-ში შენახვა
const addItem = (product) => {
    // ვამოწმებთ, ხომ არ არსებობს იგივე სახელის პროდუქტი უკვე
    // find აბრუნებს პირველივე ობიექტს, რომელიც პირობას აკმაყოფილებს, ან undefined-ს
    const exists = products.find((obj) => obj.name === product.name);

    // თუ ასეთი სახელი უკვე არსებობს, ვაჩვენებთ გაფრთხილებას და ვწყვეტთ ფუნქციას
    if(exists){
        alert('The product name already exists!');
        return;
    };

    // თუ დუბლიკატი არ არის, პროდუქტს ვამატებთ products მასივში
    products.push(product);

    // localStorage-ში ვინახავთ განახლებულ მასივს
    // JSON.stringify გარდაქმნის მასივს ტექსტად, რადგან localStorage მხოლოდ string-ს ინახავს
    localStorage.setItem('products', JSON.stringify(products));
};

// ფუნქცია: პროდუქტის წაშლა id-ის მიხედვით
const deleteItem = (id) => {
    // ვპოულობთ პროდუქტის ინდექსს id-ის მიხედვით
    // findIndex აბრუნებს ინდექსს, თუ იპოვა, და -1-ს თუ ვერ იპოვა
    const productIndex = products.findIndex((product) => product.id === id);

    // თუ ვერ მოიძებნა პროდუქტი ამ id-ით, ვაჩვენებთ შეტყობინებას და ვწყვეტთ
    if(productIndex === -1){
        alert('Product does not exist with the given id');
        return;
    };

    // splice შლის ერთ ელემენტს productIndex პოზიციიდან
    products.splice(productIndex, 1);

    // localStorage-ში ვინახავთ უკვე წაშლილი პროდუქტების ახალ სიას
    localStorage.setItem('products', JSON.stringify(products));
    
    // ცხრილის ხელახლა დახატვა, რომ UI-შიც გაქრეს წაშლილი პროდუქტი
    renderProductInTable();
};

// ფუნქცია: პროდუქტების ცხრილში დახატვა (render)
const renderProductInTable = () => {
    // თავიდან ვასუფთავებთ tbody-ს, რომ დუბლიკატები არ დაგვიგროვდეს
    tbody.innerHTML = '';

    // products მასივის თითოეულ პროდუქტზე ვქმნით ახალ <tr> რიგს
    products.forEach(product => {
        const tr = document.createElement('tr');

        // innerHTML-ით ვავსებთ რიგს სვეტებით:
        // 1) პროდუქტის სახელი
        // 2) პროდუქტის id
        // 3) Delete ღილაკი, რომელიც onclick-ზე გამოიძახებს deleteItem(product.id)
        // შენიშვნა: onclick="..." არის inline მოვლენა და ზოგ შემთხვევაში სჯობს addEventListener-ით გაკეთება
        tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.id}</td>
            <td><button onclick="deleteItem(${product.id})">Delete</button></td>
        `;

        // დასრულებული <tr> ვამატებთ tbody-ში
        tbody.appendChild(tr);
    });
};

// submit მოვლენა: როდესაც მომხმარებელი ფორმას აგზავნის (Add / Enter)
// e.preventDefault() არ აძლევს ბრაუზერს საშუალებას გვერდი გადაატვირთოს
form.addEventListener('submit', (e) => {    
    e.preventDefault();

    // ფორმის ველის მნიშვნელობის აღება
    // აქ იგულისხმება, რომ input-ს აქვს name="productName"
    // e.target არის form ელემენტი, ამიტომ e.target.productName.value მუშაობს
    const productName = e.target.productName.value;

    // ახალი პროდუქტის ობიექტის შექმნა
    const product = {
        name: productName,

        // Date.now() აბრუნებს მიმდინარე დროს მილიწამებში
        // ეს ხშირად გამოიყენება უნიკალური id-ის მისაღებად
        id: Date.now()
    };
    
    // პროდუქტს ვამატებთ (ამავე დროს localStorage-შიც ინახება addItem-ში)
    addItem(product);

    // ცხრილის განახლება, რომ ახალი პროდუქტი გამოჩნდეს
    renderProductInTable();

    // ფორმის გასუფთავება (input ცარიელი ხდება)
    e.target.reset();
});

// გვერდის ჩატვირთვისას (refresh-ის შემდეგაც) ცხრილი დაიხატოს localStorage-დან წამოღებული პროდუქტებით
renderProductInTable();


// -------------------------
// დამატებითი ინფორმაცია: localStorage
// -------------------------

// localStorage არის ბრაუზერის შიდა მეხსიერება, რომელიც ინახავს key-value მონაცემებს
// მთავარი თვისებები:
// 1) მონაცემები ინახება მუდმივად (არ იშლება refresh-ზე)
// 2) მონაცემები ინახება მხოლოდ იმავე დომენზე (origin-ზე)
// 3) ინახავს მხოლოდ string ტიპის მნიშვნელობებს
// 4) მაქსიმალური მოცულობა ჩვეულებრივ ~5MB (ბრაუზერზეა დამოკიდებული)

// ძირითადი მეთოდები:
// localStorage.setItem(key, value)  -> შენახვა
// localStorage.getItem(key)         -> მიღება (თუ არ არსებობს -> null)
// localStorage.removeItem(key)      -> კონკრეტული გასაღების წაშლა
// localStorage.clear()              -> ყველაფრის წაშლა

// რადგან მხოლოდ string ინახება, ობიექტები/მასივები უნდა გადაიქცეს JSON-ად:
// JSON.stringify(obj) -> string
// JSON.parse(string)  -> obj

// პატარა მაგალითი: თემის (theme) შენახვა
// მომხმარებელი ირჩევს "dark" ან "light" თემას და ვინახავთ localStorage-ში

// თემა შევინახოთ
// localStorage.setItem('theme', 'dark');

// თემა წავიკითხოთ
// const theme = localStorage.getItem('theme'); // 'dark' ან null

// თუ null დაბრუნდა, ნაგულისხმევად ვაყენებთ 'light'-ს
// const finalTheme = theme || 'light';

// თემის წაშლა
// localStorage.removeItem('theme');

// ყველაფრის გასუფთავება (ფრთხილად, ყველა შენახულ მონაცემს შლის ამ საიტისთვის)
// localStorage.clear();