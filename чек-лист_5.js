class MyClass {
  isAdmin = true;
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value === 'Pasha') {
      throw new Error('Ошибка');
    }
    this._name = value;
  }

  sayName() {
    return 2 + 3;
  }
}

class MyClass2 extends MyClass {
  sayName() {
    return `${super.sayName()} + 5`;
  }
}

let obj = new MyClass('Anna');
let obj2 = new MyClass2();

console.log(obj2.sayName());

//
function func(a) {
  return function (b) {
    return a + b;
  };
}

let res = func();

////// задание 4-5 чек-лист
class Student {
  constructor(name, age, isMan) {
    this.name = name;
    this.age = age;
    this.isMan = isMan;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('Name should be a string')
    } else if (name.length < 2 || name.length > 15) {
      throw new Error('Name should be between 2 and 15 characters long')
    }
    this._name = name;
  }
 
  get age() {
    return this._age;
  }
  set age(age) {
    if (age < 18) {
      console.log('too yang');
    } else if (age > 65) {
      console.log('too late');
    }
    this._age = age;
  }

  get isMan() {
    return this._isMan;
  }
  set isMan(isMan) {
    if (typeof isMan !== 'boolean') {
      console.log('Not a boolean')
    } else if (isMan !== 'man') {
      throw new Error('It is a woman')
    }
    this._isMan = isMan;
  }
}



///////
function congratWomen(date) {
  const womenDay = new Date(date);
  const day = womenDay.getDate();
  const month = womenDay.getMonth() + 1;
    
  if (day === 8 && month === 3) {
    return "С 8 марта, прекрасные женщины! Желаем вам радости, любви и успехов во всех начинаниях!";
  } else {
    return "С праздником, дорогие женщины! Желаем вам счастья, здоровья и исполнения всех желаний!";
  }
}
console.log(congratWomen('2023-03-08'));
console.log(congratWomen('1987-07-10'));

