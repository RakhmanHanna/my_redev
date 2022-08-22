//1
let admin;
let name = 'Джон';
admin = name;
console.log(admin);

//2
let ourPlanetName = 'Земля';
let currentUserName = 'Anna';

//1
let num = 3;
console.log(num);
//2
let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
//3
let c = 15;
let d = 2;
let result = c + d;
console.log(result);
//4
let a = 10;
let b = 2;
let c = 5;
console.log(a + b + c);
//5
let a = 17;
let b = 10;
let c = a - b;
let d = 7;
let result = c + d;
console.log(result);


//
let name = "Ilya";

console.log( `hello ${1}` ); // hello 1

console.log( `hello ${"name"}` ); // hello name

console.log( `hello ${name}` ); // hello ilya

let b = null;
console.log(b);

let c;
console.log(c);


///


if (!(age !>= 14 && age <= 90))


if (age < 14 || age >90)


let userName = prompt('Кто там?', '');

if (userName === 'Aдмин') {

    let password = prompt('Пароль?', '');

    if (password === 'Я главный') {
        console.log('Здравствуйте');
    } else if (password == '' || password == null) {
        console.log('Отменено')
    } else {
        console.log('неверный пароль')
    }
}  else if (userName === '' || null) {
    console.log('Отменено')
} else {
    console.log('Я вас нет знаю')
}

//1
if (a > 0 && a < 5) {
    console.log('Верно')
} else {
    console.log('Неверно')
}
//2
if (a == 0 || a == 2) {
    console.log(a + 7)
} else {
    console.log(a / 10)
}
//3
if (a <= 1 && b >= 3) {
    console.log(a + b)
} else {
    console.log(a - b)
}
//4
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно')
} else {
    console.log('Неверно')
}
//5
3
//6
0
//7
5
//8
3
//9
6
//10
6


//1
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
    
    
}
let i = 0;
while (i < 3) {
    alert(( `number ${i}!` );
    i++;
}

let num;
do {
    num = prompt('ВВеди число', '0');
} while (num <=100 && num);





//1
for (let i = 1; i <=100; i++) {
    console.log(i)
}
//2
for (let i = 11; i <=33; i++) {
    console.log(i)
}
//3
for (let i = 0; i <=100; i++) {
  if (i % 2 == 0) {
      console.log(i)
  }
}
//

let browser;

if (browser === "chrome" || browser === "firefox" || browser === 'Safari' || browser === 'Opera') {
    alert('Okey');
} else if (browser === 'edge') {
    alert('You are got the edge')
} else {
    alert('we hope')
}



switch (number) {
    case 0:
        alert('вы ввели число 0');
        break;
    case 1:
        alert('вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('вы ввели число 2 или 3');
        break;
}


switch (num) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('весна');
        break;
    case 3:
        console.log('лето');
        break;
    case 4:
        console.log('осень');
        break;
    default:
        console.log('Нет совпадений');
}


const checkAge(age) = () => (age > 18) ? true : confirm('Родители разрешили?');

function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function min(a,b) {
    return a < b ? a : b;
}

function pow(x,n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt('х?', '');
let n = prompt('n?', '');

if (n < 1) {
    alert(`степень ${n} не поддерж использ натур число`);
} else {
    alert(pow(x,n));
}

;


const findNextSquare = function() {
    let isSquare = ;
    for(i=12; i < 12; i++) {
       return i*i == isSquare;
   }
   console.log(isSquare);
}
findNextSquare();



////
function findNextSquare(sq){
    var root;
    var nextroot;
    if(Math.sqrt(sq) % 1 === 0){
         root = Math.sqrt(sq);
         nextroot=root+1;
    }else{
        return -1;
    }
    return nextroot * nextroot;
}

findNextSquare(625);