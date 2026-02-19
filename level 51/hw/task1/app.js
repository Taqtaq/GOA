// localStorage keys 
const LS_USERS = "users";
const LS_SESSION = "session";
const LS_STUDENTS = "students";

// helpers for localStorage
function load(key, fallback){
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
        return fallback
    }
}

function save(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

//simple unique id generator 
function uid(){
    return Date.now().toString(36) + Math.random().toString(36).slice(2,8);
}

//create default admin if not exists
function ensureAdmin(){
    const users = load(LS_USERS,[]);
    const hasAdmin = users.some(u => u.username === "admin");
    
    if (!hasAdmin){
        users.push({
            username: "admin",
            password: "admin",
            role: "admin"
        });
        save(LS_USERS, users)
    }
}
ensureAdmin();

//  DOM elements 
const authSection = document.getElementById("authSection");
const appSection = document.getElementById("appSection");

const tabLogin = document.getElementById("tabLogin");
const tabRegister = document.getElementById("tabRegister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const who = document.getElementById("who");
const roleEl = document.getElementById("role");
const logoutBtn = document.getElementById("logoutBtn");

const studentForm = document.getElementById("studentForm");
const editingId = document.getElementById("editingId");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const grade = document.getElementById("grade");
const subject = document.getElementById("subject");

const studentsTbody = document.getElementById("studentsTbody");
const subjectFilter = document.getElementById("subjectFilter");
const gradeSort = document.getElementById("gradeSort");
const clearAllBtn = document.getElementById("clearAllBtn");

// application state 
let session = load(LS_SESSION, null)  // { username, role }
let students = load(LS_STUDENTS, [])  //students array
let filterSubject = "";
let sortMode = "";

// auth tabs logic
tabLogin.addEventListener("click", () => {
    tabLogin.classList.add("active");
    tabRegister.classList.remove("active");
    loginForm.classList.remove("hidden");
    registerForm.classList.add('hidden');
});

tabRegister.addEventListener("click", () => {
    tabRegister.classList.add("active");
    tabLogin.classList.remove("active");
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
});

// login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    const users = load(LS_USERS, []);
    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        alert("Wrong username or password");
        return;
    }

    session = {
        username: user.username,
        role: user.role
    };

    save.apply(LS_SESSION, session);
    showApp();
})

// register (default role = user)
registerForm.addEventListener("submin", (e) => {
    e.preventDefault();

    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value;

    if (username.length < 3 || username.password.length < 3){
        alert("Min length is 3 characters");
        return;
    }

    const users = load(LS_USERS, []);
    if (users.some(u => u.username === username)){
        alert("Username already exists");
        return;
    }

    users.push({
        username,
        password,
        role: "user"
    });

    save(LS_USERS, users);
    alert("Registered successfully. Please login.");
    tabLogin.click();
    registerForm.reset();
});

// logout
logoutBtn.addEventListener("click", () => {
    session = null;
    save(LS_SESSION, null);
    showAuth();
});

// save students 
function persistStudents() {
    save(LS_STUDENTS, students);
}

//  reset edit mode
function resetEditMode() {
    editingId.value = "";
    formTitle.textContent = "Add student";
    submitBtn.textContent = "Submit";
    cancelEditBtn.classList.add("hidden");
    studentForm.reset();
}

cancelEditBtn.addEventListener("click", resetEditMode);

// add / edit student
studentForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const data = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        age: Number(age.value),
        grade: Number(grade.value),
        subject: subject.value.trim()
    };

    const id = editingId.value;

    // edit student (admin only)
    if (id) {
        if (!session.role !== "admin") {
            alert("Only admin can edit");
            resetEditMode();
            return;
        }
        const index = students.findIndex(s => s.id === id);
        if (index !== -1){
            students[index] = {...students[index], ...data};
            persistStudents();
            renderAll();
            resetEditMode();
        }
    }

    // add new student
    else {
        students.push({
            id: uid(),
            ...data
        });
        persistStudents();
        renderAll();
        studentForm.reset();
    } 
})

// filters and sorting
subjectFilter.addEventListener("change", () => {
    filterSubject = subjectFilter.value;
    renderTable();
});

gradeSort.addEventListener("change", () => {
    sortMode = gradeSort.value;
    renderTable();
});

// clear students
clearAllBtn.addEventListener("click", () => {
    if (!confirm("Clear all students?")) return;
    students = [];
    persistStudents();
    renderAll();
});

// render helpers
function renderSubjectFilterOptions() {
    const subjects = [... new Set(students.map(s => s.subject))];

    subjectFilter.innerHTML = 
    `<option value="">All</option>` +
    subject.map(s => `<option value="${s}">${s}</option>`).join("");
}

function getViewStudents (){
    let list = [...students];

    if (filterSubject) {
        list = list.filter(s => s.subject === filterSubject);
    }

    if (sortMode === "asc") list.sort((a,b) => a.grade - b.grade);
    if (sortMode === "desc") list.sort((a,b) => b.grade - a.grade);
    
    return list;
}

// render table
function renderTable() {
  const view = getViewStudents();

  studentsTbody.innerHTML = view.map((s, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${s.firstName} ${s.lastName}</td>
      <td>${s.age}</td>
      <td>${s.grade}</td>
      <td>${s.subject}</td>
      <td>
        ${session.role === "admin" ? `
          <button onclick="startEdit('${s.id}')">Edit</button>
          <button onclick="deleteStudent('${s.id}')">Delete</button>
        ` : "—"}
      </td>
    </tr>
  `).join("");
}

//  edit student
function startEdit(id) {
  const s = students.find(x => x.id === id);
  if (!s) return;

  editingId.value = s.id;
  firstName.value = s.firstName;
  lastName.value = s.lastName;
  age.value = s.age;
  grade.value = s.grade;
  subject.value = s.subject;

  formTitle.textContent = "Edit student";
  submitBtn.textContent = "Save";
  cancelEditBtn.classList.remove("hidden");
}

// delete student
function deleteStudent(id) {
  if (!confirm("Delete student?")) return;
  students = students.filter(s => s.id !== id);
  persistStudentspersistStudents();
  renderAll();
}

// render everything 
function renderAll() {
  renderSubjectFilterOptions();
  renderTable();
}

//  sections
function showAuth() {
  authSection.classList.remove("hidden");
  appSection.classList.add("hidden");
}

function showApp() {
  authSection.classList.add("hidden");
  appSection.classList.remove("hidden");

  who.textContent = session.username;
  roleEl.textContent = session.role;

  // Only admin can see Clear Students button
  if (session.role !== "admin") {
    clearAllBtn.classList.add("hidden");
  } else {
    clearAllBtn.classList.remove("hidden");
  }

  resetEditMode();
  renderAll();
}


// app start 
if (session) showApp();
else showAuth();
