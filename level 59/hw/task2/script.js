// ქარუსელის სურათების მასივი
const imageCarousel = [];

// მიმდინარე სურათის ინდექსი
let currentIndex = 0;

// ელემენტების მიღება
const addBtn = document.getElementById("addBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselImg = document.getElementById("carouselImg");
const emptyState = document.getElementById("emptyState");
const counter = document.getElementById("counter");

// ეკრანზე ინფორმაციის განახლება
function render() {
  counter.textContent = `${imageCarousel.length} / 5`;

  if (imageCarousel.length === 0) {
    carouselImg.style.display = "none";
    emptyState.style.display = "block";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  if (currentIndex < 0) currentIndex = imageCarousel.length - 1;
  if (currentIndex >= imageCarousel.length) currentIndex = 0;

  emptyState.style.display = "none";
  carouselImg.style.display = "block";
  carouselImg.src = imageCarousel[currentIndex];

  prevBtn.disabled = false;
  nextBtn.disabled = false;
}

// სურათის დამატება ღილაკით
addBtn.addEventListener("click", () => {
  // ლიმიტის შემოწმება
  if (imageCarousel.length >= 5) {
    alert("You can only add 5 images to the Image carousel");
    return;
  }

  // მომხმარებლისგან URL-ის მოთხოვნა
  const url = prompt("Enter image URL:");

  // ცარიელი ან გაუქმებული მნიშვნელობის დამუშავება
  if (url === null) return;
  const cleaned = url.trim();
  if (!cleaned) return;

  // სურათის დამატება მასივში
  imageCarousel.push(cleaned);

  // ბოლოს დამატებულზე გადასვლა
  currentIndex = imageCarousel.length - 1;

  render();
});

// წინა სურათი
prevBtn.addEventListener("click", () => {
  if (imageCarousel.length === 0) return;
  currentIndex -= 1;
  render();
});

// შემდეგი სურათი
nextBtn.addEventListener("click", () => {
  if (imageCarousel.length === 0) return;
  currentIndex += 1;
  render();
});

// საწყისი მდგომარეობა
render();