// Fruit სუპერ კლასი
class Fruit {
  constructor(name, price) {
    // ხილის სახელი
    this.name = name;
    // ხილის ფასი
    this.price = price;
  }

  // ხილის ინფორმაციის გამოტანა
  getInfo() {
    console.log(`${this.name} costs ${this.price}$`);
  }
}

// Apple ქვეკლასი
class Apple extends Fruit {
  constructor(name, price, color) {
    // მშობელი კლასის გამოძახება
    super(name, price);
    // ვაშლის ფერი
    this.color = color;
  }

  showColor() {
    console.log(`Apple color is ${this.color}`);
  }
}

// Orange ქვეკლასი
class Orange extends Fruit {
  constructor(name, price) {
    super(name, price);
  }
}

// ობიექტების შექმნა
const apple1 = new Apple('Red Apple', 2, 'Red');
const orange1 = new Orange('Orange', 3);

apple1.getInfo();
apple1.showColor();
orange1.getInfo();


/* ====================== 3 ====================== */
// getter → გამოიყენება მნიშვნელობის წასაკითხად
// setter → გამოიყენება მნიშვნელობის შესაცვლელად

class User {
  constructor(name) {
    this._name = name;
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(newName) {
    this._name = newName;
  }
}

const user1 = new User('Nika');
console.log(user1.name);
user1.name = 'Gio';
console.log(user1.name);


/* ====================== 4 ====================== */
// Robot კლასი
class Robot {
  constructor(name) {
    // private სახელი
    this._name = name;
    // ენერგიის საწყისი დონე
    this._energyLevel = 100;
  }

  // სახელის წასაკითხად
  get name() {
    return this._name;
  }

  // ენერგიის setter შემოწმებით
  set energyLevel(value) {
    this._energyLevel = value;
    if (this._energyLevel < 50) {
      console.log('The robot needs the recharge');
    } else {
      console.log('The robot is full of energy');
    }
  }

  // რობოტის ინფორმაცია
  introduce() {
    console.log(`My name is ${this._name} and my energy level is ${this._energyLevel}`);
  }

  // სირბილი
  run() {
    this.energyLevel = this._energyLevel - 20;
  }

  // ჭურჭლის დარეცხვა
  doDishes() {
    this.energyLevel = this._energyLevel - 40;
  }
}

const robot1 = new Robot('Robo');
robot1.introduce();
robot1.run();
robot1.doDishes();