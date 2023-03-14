class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    return 'Hello';
  }
}

class Admin extends User {
  constructor(name, age, isAdmin) {
    super(name, age);
    this.isAdmin = isAdmin;
  }
  sayName() {
    return `${super.sayName()} " world"`;
  }
}

let admin = new User('Anna', 28, false);
console.log(admin.sayName());

//
function func(a) {
  return function (b) {
    return a + b;
  };
}
let res = func('Anna');

console.log(res(' Rakhman'));
