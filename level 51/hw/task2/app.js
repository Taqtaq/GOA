// ====== localStorage keys ======
const LS_ACCOUNTS = "task2_accounts";
const LS_SESSION = "task2_session";

// ====== storage helpers ======
function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ====== simple id ======
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// ====== password strength checker ======
// Strong rule (simple, clear):
// - length >= 8
// - has upper + lower + number + special
function getPasswordStrength(pw) {
  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasNumber = /[0-9]/.test(pw);
  const hasSpecial = /[^A-Za-z0-9]/.test(pw);
  const longEnough = pw.length >= 8;

  const score = [hasLower, hasUpper, hasNumber, hasSpecial, longEnough].filter(Boolean).length;

  if (score === 5) return "strong";
  if (score >= 3) return "medium";
  return "weak";
}

// ====== DOM ======
const tabRegister = document.getElementById("tabRegister");
const tabLogin = document.getElementById("tabLogin");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

const regName = document.getElementById("regName");
const regEmail = document.getElementById("regEmail");
const regPassword = document.getElementById("regPassword");
const pwStatus = document.getElementById("pwStatus");

const accountsTbody = document.getElementById("accountsTbody");
const clearAccountsBtn = document.getElementById("clearAccountsBtn");

const authSection = document.getElementById("authSection");
const profileSection = document.getElementById("profileSection");

const currentEmail = document.getElementById("currentEmail");
const logoutBtn = document.getElementById("logoutBtn");

const profileForm = document.getElementById("profileForm");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profilePhone = document.getElementById("profilePhone");
const profileCity = document.getElementById("profileCity");
const profileBio = document.getElementById("profileBio");

// ====== state ======
let accounts = load(LS_ACCOUNTS, []);
let session = load(LS_SESSION, null); // { email }

// ====== tabs logic ======
tabRegister.addEventListener("click", () => {
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

tabLogin.addEventListener("click", () => {
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
});

// ====== live password strength UI ======
regPassword.addEventListener("input", () => {
  const s = getPasswordStrength(regPassword.value);
  pwStatus.textContent = `Strength: ${s.toUpperCase()}`;
});

// ====== register ======
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = regName.value.trim();
  const email = regEmail.value.trim().toLowerCase();
  const password = regPassword.value;

  if (!name || !email || !password) return;

  // Check password strength: account is created only if STRONG
  const strength = getPasswordStrength(password);
  if (strength !== "strong") {
    alert("Password must be STRONG (8+ chars, upper, lower, number, special).");
    return;
  }

  // Prevent duplicate emails
  if (accounts.some(a => a.email === email)) {
    alert("Account with this email already exists.");
    return;
  }

  // Create account (store minimal profile fields + bio)
  const newAcc = {
    id: uid(),
    name,
    email,
    password,     // Note: for study projects only (not secure for real apps)
    phone: "",
    city: "",
    bio: ""
  };

  accounts.push(newAcc);
  save(LS_ACCOUNTS, accounts);

  registerForm.reset();
  pwStatus.textContent = "Strength: —";

  renderAccounts();
  alert("Account created! You can login now.");
  tabLogin.click();
});

// ====== login ======
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;

  const acc = accounts.find(a => a.email === email && a.password === password);
  if (!acc) {
    alert("Wrong email or password.");
    return;
  }

  session = { email: acc.email };
  save(LS_SESSION, session);

  showProfile();
});

// ====== logout ======
logoutBtn.addEventListener("click", () => {
  session = null;
  save(LS_SESSION, null);
  showAuth();
});

// ====== profile save (update fields + bio) ======
profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!session) return;

  const idx = accounts.findIndex(a => a.email === session.email);
  if (idx === -1) return;

  // Update several profile fields
  accounts[idx].name = profileName.value.trim();
  accounts[idx].phone = profilePhone.value.trim();
  accounts[idx].city = profileCity.value.trim();

  // Add/update bio
  accounts[idx].bio = profileBio.value.trim();

  save(LS_ACCOUNTS, accounts);
  renderAccounts();
  alert("Profile saved.");
});

// ====== clear all accounts (simple demo button) ======
clearAccountsBtn.addEventListener("click", () => {
  if (!confirm("Clear all accounts?")) return;

  accounts = [];
  session = null;
  save(LS_ACCOUNTS, accounts);
  save(LS_SESSION, session);

  renderAccounts();
  showAuth();
});

// ====== render accounts table ======
function renderAccounts() {
  accountsTbody.innerHTML = accounts.map((a, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${escapeHtml(a.name)}</td>
      <td>${escapeHtml(a.email)}</td>
      <td>${escapeHtml(a.bio || "—")}</td>
    </tr>
  `).join("");
}

// ====== show sections ======
function showAuth() {
  authSection.classList.remove("hidden");
  profileSection.classList.add("hidden");
}

function showProfile() {
  authSection.classList.add("hidden");
  profileSection.classList.remove("hidden");

  const acc = accounts.find(a => a.email === session.email);
  if (!acc) {
    showAuth();
    return;
  }

  currentEmail.textContent = acc.email;

  // Fill profile form with current data
  profileName.value = acc.name;
  profileEmail.value = acc.email;
  profilePhone.value = acc.phone;
  profileCity.value = acc.city;
  profileBio.value = acc.bio;
}

// ====== minimal HTML escaping ======
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ====== app start ======
renderAccounts();
if (session) showProfile();
else showAuth();
