// კლასი არის შაბლონი (template), რომლის მიხედვითაც ვქმნით ობიექტებს
class Account {
  // private კუთვნილება — #email
  // მასზე წვდომა მხოლოდ კლასის შიგნით შეიძლება
  #email;

  // constructor არის სპეციალური მეთოდი,
  // რომელიც ავტომატურად იძახება ობიექტის შექმნის დროს
  constructor(email, password, fullname) {
    this.#email = email;
    this.password = password;
    this.fullname = fullname;
  }

  // მეთოდი — ფუნქცია, რომელიც კლასის შიგნით არის აღწერილი
  greet() {
    console.log(`Hello my name is ${this.fullname}`);
  }

  // get მეთოდი გამოიყენება private კუთვნილების წასაკითხად
  get email() {
    return this.#email;
  }

  // set მეთოდი გამოიყენება private კუთვნილების შესაცვლელად
  set email(value) {
    // რეგულარული გამოსახულება (regex) gmail-ის შესამოწმებლად
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(value)) {
      this.#email = value;
      console.log("Email successfully updated");
    } else {
      console.log("Error: Email must be a valid gmail address");
    }
  }
}

// ობიექტის შექმნა კლასის მიხედვით
const user1 = new Account(
  "test@gmail.com",
  "123456",
  "Giorgi Beridze"
);

// მეთოდის გამოძახება
user1.greet();

// get მეთოდის გამოყენება
console.log(user1.email);

// set მეთოდის გამოყენება (სწორი gmail)
user1.email = "newemail@gmail.com";

// set მეთოდის გამოყენება (არასწორი email)
user1.email = "example@yahoo.com";
//2
// სუპერ კლასი (Parent Class)
// აქ ვინახავთ საერთო კუთვნილებებს და მეთოდებს
class Person {
  // constructor — იძახება ობიექტის შექმნის დროს
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // საერთო მეთოდი
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  }
}

// Student კლასი მემკვიდრეობით იღებს Person კლასის კუთვნილებებს და მეთოდებს
class Student extends Person {
  constructor(name, age, grade) {
    // super() იძახებს სუპერ კლასის constructor-ს
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher კლასი ასევე მემკვიდრეობით იღებს Person-ს
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} teaches ${this.subject}`);
  }
}

// ობიექტების შექმნა
const student1 = new Student("Giorgi", 20, "A");
const teacher1 = new Teacher("Nino", 35, "Math");

// მემკვიდრეობით მიღებული მეთოდის გამოყენება
student1.greet();
teacher1.greet();

// კლასისთვის სპეციფიკური მეთოდები
student1.study();
teacher1.teach();
//3
