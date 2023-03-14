'use strict';

function maskify(str) {
  return (str = str.split('').fill('#', 0, -4).join(''));
}

console.log(maskify('4556364607935616'));

//
function func(arr) {
  let obj = {};
  arr.forEach((el) => (el in obj ? (obj[el] += 1) : (obj[el] = 1)));
  return Object.entries(obj).reduce((acc, current) => {
    return (
      (max = 0),
      current > max ? ((max = current[1]), (acc = current)) : (acc = current),
      acc[0]
    );
  }, []);
}

let array = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7];

console.log(func(array));

//
function expand(arr) {
  let i = 0;
  while (i < arr.length) {
    arr = arr.reduce(function (a, b) {
      return a.concat(b);
    }, []);
    i++;
  }
  return arr;
}
let arr1 = [1, [2, [3, [4]]]];
let arr2 = [1, [2], [3, [[4]]], [5, 6]];
console.log(expand(arr1)); // 1,2,3,4
console.log(expand(arr2)); // 1,2,3,4,5,6

//
function colonOdd(num) {
  return num
    .toString()
    .split('')
    .map((item, index, array) =>
      array[index] % 2 == 1 && array[index + 1] % 2 == 1 ? item + ':' : item
    )
    .join('');
}
console.log(colonOdd(55639217));

//
function transform(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      let result = arr.slice(0, i) + ',' + arr.slice(i + 2);
      let newArray = result.split(',');
      return newArray;
    } else if (arr[i] === '--discard-prev') {
      let result = arr.slice(0, i - 1) + ',' + arr.slice(i + 1);
      let newArray = result.split(',');
      return newArray;
    } else if (arr[i] === '--double-next') {
      let result = arr.slice(0, i) + ',' + arr[i + 1] + ',' + arr.slice(i + 1);
      let newArray = result.split(',');
      return newArray;
    } else if (arr[i] === '--double-prev') {
      let result = arr.slice(0, i) + ',' + arr[i - 1] + ',' + arr.slice(i + 1);
      let newArray = result.split(',');
      return newArray;
    }
  }
}

console.log(transform([1, 3, '--double-next', 4])); // => [1, 2, 3, 4, 4, 5]
console.log(transform([1, 3, '--discard-prev', 4]));

//
function longest(str1, str2) {
  [...new Set(str1 + str2)].sort().join('');
}

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));

//
function longest(s1, s2) {
  var newStr = s1.concat(s2);
  var longestCharArr = unique(newStr).split('').sort();

  return longestCharArr.join('');
}

function unique(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) == -1) {
      result += str[i];
    }
  }
  return result;
}
console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));

//
function longest(s1, s2) {
  let val = new Set(s1 + s2);
  let newStr = '';
  for (let item of val) {
    newStr += item;
  }
  let newestStr = function (newStr) {
    return newStr.split('').sort().join('');
  };
  return newestStr(newStr);
}

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
