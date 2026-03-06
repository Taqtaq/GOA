const form = document.getElementById("contactForm");

const formCard = document.getElementById("formCard");
const successCard = document.getElementById("successCard");
const sendAnother = document.getElementById("sendAnother");

function setError(name, message) {
  const err = document.querySelector(`[data-error-for="${name}"]`);
  if (err) err.textContent = message || "";
}

function setInvalid(inputEl, isInvalid) {
  const wrap = inputEl.closest(".field") || inputEl.closest(".fieldset") || inputEl.closest(".consent");
  if (!wrap) return;
  wrap.classList.toggle("is-invalid", !!isInvalid);
}

function isEmailValid(email) {
  // простая проверка для учебного проекта
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // reset errors
  ["firstName","lastName","email","queryType","message","consent"].forEach(n => setError(n,""));
  document.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));

  const firstName = form.elements.firstName.value.trim();
  const lastName = form.elements.lastName.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const queryType = form.querySelector('input[name="queryType"]:checked')?.value || "";
  const consent = form.elements.consent.checked;

  let ok = true;

  if (!firstName) {
    ok = false;
    setError("firstName", "This field is required");
    setInvalid(form.elements.firstName, true);
  }

  if (!lastName) {
    ok = false;
    setError("lastName", "This field is required");
    setInvalid(form.elements.lastName, true);
  }

  if (!email) {
    ok = false;
    setError("email", "This field is required");
    setInvalid(form.elements.email, true);
  } else if (!isEmailValid(email)) {
    ok = false;
    setError("email", "Please enter a valid email address");
    setInvalid(form.elements.email, true);
  }

  if (!queryType) {
    ok = false;
    setError("queryType", "Please select a query type");
    // подсветим всю группу
    const fieldset = form.querySelector(".fieldset");
    fieldset.classList.add("is-invalid");
  }

  if (!message) {
    ok = false;
    setError("message", "This field is required");
    setInvalid(form.elements.message, true);
  }

  if (!consent) {
    ok = false;
    setError("consent", "To submit this form, please consent to being contacted");
    const consentWrap = form.querySelector(".consent");
    consentWrap.classList.add("is-invalid");
  }

  if (!ok) return;

  // success state
  formCard.classList.add("hidden");
  successCard.classList.remove("hidden");
});

sendAnother.addEventListener("click", () => {
  form.reset();
  ["firstName","lastName","email","queryType","message","consent"].forEach(n => setError(n,""));
  document.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));

  successCard.classList.add("hidden");
  formCard.classList.remove("hidden");
});