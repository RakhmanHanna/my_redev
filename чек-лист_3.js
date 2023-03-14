'use strict';
//
function countCats(arr) {
  let cat = "^^";
  arr.flat().filter((item) => (item == cat));
  return arr.length
}

console.log(countCats([[0,1,"^^"],[9,"^^",2],["^^",8,7]]));

//
function deleteVowels(str) {
  let newStr = ' ';
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] != 'a' &&
      str[i] != 'e' &&
      str[i] != 'i' &&
      str[i] != 'o' &&
      str[i] != 'u'
    ) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(deleteVowels('It is for loozers!'));

// 'e', 'i', 'o', 'u'
//
function learn(subject, callback) {
  console.log(`Starting my ${subject}.`);
  callback();
}

learn('js', function () {
  console.log('Finished');
});

// //
// // Получить результаты (числа) двух промисов и вывести их сумму в консоль
// Получить результаты (числа) двух промисов и вывести их сумму в консоль

let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(5), 4000);
});

let prom2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2 + 8), 2000);
});

async function resultProm() {
  let result1 = await prom1;
  let result2 = await prom2;
  console.log(result1);
  console.log(result2);
}
console.log(resultProm());

let sum = Promise.all([prom1, prom2]);
sum.then((data) => console.log(data.reduce((a, b) => a + b)));

prom1.then((data) => console.log(data));
prom2.then((data) => console.log(data));

let sum = Promise.all([prom1, prom2]);
sum.then((data) => console.log(data.reduce((a, b) => a + b)));
console.log(sum);

// //Напишите функцию, которая принимает массив и переносит все 0 в конец, не изменяя порядок остальных элементов массива.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]
function moveZeros(a) {
  if (a.length <= 1) {
    return a;
  }

  let z = a.indexOf(0); // O(N)
  if (z === -1 || z === a.length - 1) {
    return a;
  }

  for (let i = z + 1; i < a.length; i++) {
    if (a[i] !== 0) {
      a[z++] = a[i];
      a[i] = 0;
    }
  }

  return a;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));

//
String.prototype.toJadenCase = function (str) {
  str = str.toLowerCase().split(' ');

  return str.map((item) => item[0].toUpperCase() + item.substring(1)).join(' ');
};
let str = '';
console.log(str.toJadenCase('The world is not what we think it is'));

//
// busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17
function busStops(arr) {
  return arr.reduce((sum, i) => sum + i[0] - i[1], 0);
}
console.log(
  busStops([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

//
function sumTwo(array) {
  return array
    .slice()
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
}
console.log(sumTwo([12, 423, 54, 1235, 3, 15, 2, 52]));

//

function removeDuplicate(str) {
  str = str.split(',');
  return str.filter((item, index) => str.indexOf(item) === index).join(', ');
}

let string = 'вишня, груша, слива, груша';

console.log(removeDuplicate(string));

// //
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал.

let vegetables = ['Капуста', 'Репа', 'Редиска'];

function arrayClone(arr) {
  return arr.slice();
}
console.log(arrayClone(vegetables));

//
function findMissingLetter(array) {
  let string = array.join('');
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));

// Напишите функцию unique_letters(str), которая возвращает строку, оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

function unique_letters(str) {
  return str
    .split('')
    .filter((item) => str.lastIndexOf(item) === str.indexOf(item))
    .join('');
}

console.log(unique_letters('anaconda'));

//
function printer_error(str) {
  return (str = `${
    str.split('').filter((i) => i.charCodeAt() > 109).length
  } / ${str.length}`);
}

console.log(printer_error('aaabbbbhaijjjm'));

//

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
let arr = [
  'php',
  'php',
  'css',
  'css',
  'script',
  'script',
  'html',
  'html',
  'java',
];

console.log(removeDuplicates(arr));

//
function list(str) {
  const numbers = str.split(' ').map((item) => +item);
  return {
    min: numbers.reduce((a, v) => (v < a ? (a = v) : {}, a)),
    max: numbers.reduce((a, v) => (v > a ? (a = v) : {}, a)),
  };
}
console.log(list('4 5 29 54 4 0 -123 666 -64 1 -3 6 -6'));

//
function cutString(str, n) {
  return str.split(' ').splice(0, n).join(' ');
}

let str = 'Сила тяжести приложена к центру масс тела';

console.log(cutString(str, 5));

//
function func(arr1, arr2) {
  const arr3 = arr1.reduce(
    (acc, curr, i) => acc.concat(arr2[i] + curr || curr),
    []
  );
  return arr3;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6];

console.log(func(array1, array2)); // [5,7,9,4,5]

//
const birthYear = [1974, 1987];
const ages = birthYear.map((item) => 2022 - item);
console.log(ages);

//
// likes([]) => 'no one likes this'
// likes(['Peter']) => 'Peter likes this'
// likes(['Jacob', 'Alex']) => 'Jacob and Alex like this'
// likes(['Max', 'John', 'Mark']) => 'Max, John and Mark like this')
// likes(['Alex', 'Jacob', 'Mark', 'Max']) => 'Alex, Jacob and 2 others like this'
function likes(names) {
  if (!names.length) return 'no one likes this';
  return `${names[0]}${
    names[1] ? (names.length == 2 ? ' and ' + names[1] : ',' + names[1]) : ''
  }${
    names.length < 4
      ? names[2]
        ? ' and ' + names[2]
        : ''
      : ' and ' + (names.length - 2) + ' others'
  } ${names.length == 1 ? 'likes' : 'like'} this`;
}
console.log(likes([]));
console.log(likes(['Peter']));

//
function correctPin(pin) {
  return (
    typeof pin === 'string' &&
    !isNaN(Number(pin)) &&
    (pin.length === 4 || pin.length === 6)
  );
}
console.log(correctPin('5567'));
console.log(correctPin('5432567'));

//
function list(str) {
  const numbers = str.split(' ').map((item) => +item);
  return {
    min: numbers.reduce((a, v) => (v < a ? (a = v) : {}, a)),
    max: numbers.reduce((a, v) => (v > a ? (a = v) : {}, a)),
  };
}
console.log(list('4 5 29 54 4 0 -123 666 -64 1 -3 6 -6'));

function minMax(arr) {
  return [
    arr.reduce((a, v) => (v < a ? (a = v) : {}, a)),
    arr.reduce((a, v) => (v > a ? (a = v) : {}, a)),
  ];
}
console.log(minMax([1, 5, 8, 10, 35, 100]));

function simple(str) {
  return str
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .shift().length;
}
console.log(simple('bitcoin take over the world maybe who knows perhaps'));

//
// Напишите функцию, которая переделывает строку из camelCase в snake_case.

// Например:
function solution(str) {
  return str
    .split('')
    .map((char) =>
      char == char.toUpperCase() ? '_' + char.toLowerCase() : char
    )
    .join('');
}

console.log(solution('redevCourses')); // "redev_courses"

//
function palindrom(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if (str[i] === str[j + 1]) {
        if (str.slice(i, j + 2) === [str.slice(i, j + 2)].reverse().join(''));
      }
      res.push(str.slice(i, j + 2));
    }
  }
  return res.length === 0 ? 'empty array' : res;
}
console.log(palindrom('Anna'));
console.log(palindrom('Топот'));

function palindrom(str) {
  str = str
    .toLowerCase()
    .split('')
    .filter((char) => char !== '')
    .reverse()
    .join('');
  const len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  return true;
}

function palindrom(string) {
  const str = string
    .split('')
    .filter((el) => el !== ' ')
    .join()
    .toLowerCase();
  return str === str.split('').reverse().join('');
}

console.log(palindrom('Alex'));
console.log(palindrom('Топот'));
console.log(palindrom('Ад гонит иногда'));

//
let user = {
  name: 'Василий Иванович',
  age: 35,
};

let res = JSON.parse(JSON.stringify(user));

//
String.prototype.startsWith = function (start) {
 return this.includes(start, 4);
};

let str = 'abc def ghi jkl mno pqr stu';

console.log(str.startsWith('abc'));

//

String.prototype.endsWith = function(substring) {
  return this.indexOf(substring, this.length - substring.length) !== -1;
};

let str = "Каждый охотник желает знать";
let str1 = "скрипт";
let str2 = "знать";
let str3 = "Каждый"

console.log(str.endsWith(str1)) // false
console.log(str.endsWith(str2)) // true
console.log(str.endsWith(str3))


//
function curry(f) {
  return function (a) {
    return function (b) {
      return function(f)
    }
  }
}

function sum(a,b) {
  return a +b;
}

let res = curry(sum);

alert(res(1)(2));
//
let today = new Date(Date.now());
console.log(today);

//
function curry(func) {
  return function(a) {
    return function(b) {
      return function(c) {
        return func(a,b,c)
      }
    }
  }
}

function sum(a,b,c) {
  return a + b + c;
}

let f = curry(sum);
console.log(f(1)(2)(3));

//
function factorial(params) {
  return params ? params * factorial(params-1) : 1;
}
console.log(factorial(5));

//
function anagrams(word, words) {
  return words.filter(function(item){
    return item.split('').sort().join('') === word.split('').sort().join('');
  });
};

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));// ['aabb', 'bbaa'])

//
function squareDigits(num){
  return +(num.toString().split('').map(val => val * val).join(''));
};
console.log(squareDigits(9119)); // 811181)

function orderWords(str) {
  let words = str.split(' ');
  let result = [];
  
  for (let i = 1; i < words.length + 1; i++) {
    result.push(words.find(word => word.includes(i)));
  }
  return result.join(' ');
}

console.log(orderWords('T4est is2 Thi1s 3a'));

//
const obj1 = {
  a: 1
}
const obj2 = {
  a: 2,
  __proto__: obj1
}

function sum(a) {
  return this.a + a;
}
console.log(sum.call(obj2, 2));



//
function replaceAll(find, replace, str) {
  while( str.indexOf(find) > -1) {
    str = str.replace(find, replace);
  }
  return str;
}

let str = 'abc def def lom abc abc def';

console.log(replaceAll('abc', 'x', str));

//
function alphabetize(str) {
  return str.split('').sort().join('');
}

console.log(alphabetize("Europe"));