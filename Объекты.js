//
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

//
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

//
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

//1
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(obj['c']);
console.log(obj.c);

//2
let obj = {
  Коля: '1000',
  Вася: '500',
  Петя: '200',
};
console.log(obj['Петя']);
console.log(obj['Коля']);

//3
let weekDays = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Cреда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Cуббота',
  7: 'Воскресенье',
};
console.log(weekDays['1']);

//4
let day = '1';
console.log(weekDays[day]);

//

let calculator = {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
