'use strict';
let user = {
  name: 'Владислав',
  age: 23,
  talents: ['JS', 'HTML', 'CSS'],
  sayAge: function () {
    return this.age;
  },
  sayName: () => this.name,
};
// 1
console.log(user.sayAge());
console.log(user.sayName());
// 2
const user2 = {
  name: 'Student',
  age: 19,
};
user2.sayAge = user.sayAge;
console.log(user2.sayAge());
// 3
const callAge = user.sayAge;
console.log(callAge());


console.log(String.fromCharCode(63));