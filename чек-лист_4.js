'use strict';

let user = {
  name: 'Anna',
  age: 23,
};

let strUser = JSON.stringify(user, ['name']);
let obj = JSON.parse(strUser);
console.log(strUser);
console.log(obj);

let a = 15;
try {
  console.log('Start');
  throw new Error('Ошибка');
} catch ({ message }) {
  console.log(message);
} finally {
  console.log('Okey');
}
console.log();

function factorial(a, b) {
  console.log(this);
  console.log(a, b);
}

factorial.call({ name: 'Anna' }, 'age', 'isWoman');
factorial.apply({ name: 'Anna' }, ['age', 'isWoman']);
let d = factorial.bind({ name: 'Anna' }, 'age', 'isWoman');
console.log(d());

//
function func(a) {
  return function (b) {
    return a + b;
  };
}

let c = func();
console.log(c(' Anna'));

let map = new Map();
map.set(true, 'true');
map.set(5, '5');

console.log(map.get(5));

let today = new Date();
console.log(+today);

let animal = {
  isEat: true,
};

let cat = {
  name: 'Murr',
};

cat.__proto__ = animal;
console.log(cat.isEat);

Object.prototype.redev = function (name) {
  return name + this;
};

let str = 'Rakhman';
console.log(str.redev('Anna'));

function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}
let curryFunc = curry(sum);
console.log(curryFunc(2)(2)(2));
console.log(sum(2, 2, 2));

//
function createDreamTeam(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i][0]);
  }

  return result.sort().join('');
}

console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));

//
function createDreamTeam(arr) {
  let result = arr.filter((item) => typeof item == 'string');
  return !result.length
    ? false
    : result
        .sort()
        .map((item) => item[0])
        .join('');
}

console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));
