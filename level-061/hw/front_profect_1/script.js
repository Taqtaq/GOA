const rateButtons = document.querySelectorAll(".rate-btn");
const submitBtn = document.getElementById("submitBtn");
const hint = document.getElementById("hint");

const ratingCard = document.getElementById("ratingCard");
const thankCard = document.getElementById("thankCard");
const selectedText = document.getElementById("selectedText");
const rateAgain = document.getElementById("rateAgain");

let selected = null;

rateButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    rateButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    selected = Number(btn.dataset.value);
    submitBtn.disabled = false;
    hint.textContent = `Selected: ${selected}`;
  });
});

submitBtn.addEventListener("click", () => {
  if (!selected) {
    hint.textContent = "Please select a rating first.";
    return;
  }

  selectedText.textContent = `You selected ${selected} out of 5`;
  ratingCard.classList.add("hidden");
  thankCard.classList.remove("hidden");
});

rateAgain.addEventListener("click", () => {
  // reset
  selected = null;
  submitBtn.disabled = true;
  hint.textContent = "";

  rateButtons.forEach(b => b.classList.remove("active"));

  thankCard.classList.add("hidden");
  ratingCard.classList.remove("hidden");
});