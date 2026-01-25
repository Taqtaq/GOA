// getElementById — ირჩევს ერთ ელემენტს უნიკალური id-ით; გამოიყენე როცა ზუსტად იცი id და გჭირდება ერთი კონკრეტული ელემენტი
const elById = document.getElementById("app");

// getElementsByClassName — ირჩევს ყველა ელემენტს class-ის მიხედვით; აბრუნებს live HTMLCollection-ს, კარგია როცა ბევრი ერთნაირი კლასის ელემენტი გაქვს
const elsByClass = document.getElementsByClassName("card");

// getElementsByTagName — ირჩევს ყველა ელემენტს ტეგის მიხედვით; აბრუნებს live HTMLCollection-ს, გამოიყენე როცა კონკრეტული ტეგის ყველა ელემენტი გჭირდება
const elsByTag = document.getElementsByTagName("li");

// getElementsByName — ირჩევს ელემენტებს name ატრიბუტით; ხშირად გამოიყენება form ელემენტებზე (input/radio/checkbox)
const elsByName = document.getElementsByName("email");

// querySelector — ირჩევს პირველ ელემენტს CSS selector-ით; როცა გჭირდება მოქნილი არჩევა (id/class/ატრიბუტი/შვილები)
const firstMatch = document.querySelector(".menu > li.active");

// querySelectorAll — ირჩევს ყველა შესაბამის ელემენტს CSS selector-ით; აბრუნებს static NodeList-ს, კარგია როცა გინდა foreach/map და არ გჭირდება live განახლება
const allMatches = document.querySelectorAll("section[data-type='news'] .item");

// closest — იწყებს მოცემული ელემენტიდან და ზემოთ (parent-ებზე) ეძებს პირველ შესაბამისს; გამოიყენე event delegation დროს
// (ეს selector-ია ელემენტზე, არა document-ზე)
const btn = document.querySelector("button");
const nearestCard = btn ? btn.closest(".card") : null;

// matches — ამოწმებს ემთხვევა თუ არა ელემენტი CSS selector-ს; გამოიყენე click handler-ში target-ის გასაფილტრად
const isActive = btn ? btn.matches(".btn.primary") : false;
