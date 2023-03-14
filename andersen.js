//1
const invert = (array) => array.map((item) => -item);
function opposite(number) {
    return -number;
}
console.log(-14);
  
//2
function basicOp(operation, value1, value2) {
  let result = '';
  switch (operation) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '/':
      result = value1 / value2;
      break;
    default:
      return null;
  }
  return result;
}
//3
function printArray(array) {
  return array.join(',');
}
//4
function determineTime(durations) {
  let hours = 0;
  let min = 0;
  let sec = 0;
  durations.map((v) =>
    v
      .split(':')
      .map((v, i) =>
        i === 0 ? (hours += v * 1) : i === 1 ? (min += v * 1) : (sec += v * 1)
      )
  );
  min += sec / 60;
  hours += min / 60;
  return hours <= 24;
}
//5
function getMiddle(s) {
  let evenOdd = s.length % 2 === 0;
  let minMid = s.charAt(s.length / 2 - 1);
  let mid = s.charAt(s.length / 2);

  return evenOdd == true ? minMid.concat(mid) : mid;
}
//6
var Singleton = function () {
  if (Singleton.__instance) {
    return Singleton.__instance;
  }

  Singleton.__instance = this;
};
//7
function array(arr) { arr = arr.split (','); arr.shift(); arr.pop(); arr = arr.toString().replace(/,/g, ' '); return arr.length < 1 ? null : arr; }

// Best Solution

function array(arr){ return arr.split(",").slice(1,-1).join(" ") || null; }

// Best solution #2

function array(arr){ var data = arr.split(','); data.pop() data.shift(); return data.length ? data.join(' ') : null; }
//
var yourString = "/installers/";
var result = yourString.substring(1, yourString.length-1);

console.log(result);

//8
function prefill(n, v) {
    if(n === 0 || n === '0') return [];
  
    if(!parseInt(n) || n < 0 ){
  
      let typeError = new TypeError();
      typeError.name = "TypeError";
      typeError.message =  n + " is invalid";
      throw typeError;
    };
  
    return new Array(n).fill(v); 
}
//9
function crossProduct (vector1, vector2) {
    if (!(vector1 instanceof Array) || !(vector2 instanceof Array) || vector1.length !== 3 || vector2.length!==3) {
      throw "Arguments are not 3D vectors!"
    }
    
    return [(vector1[1]*vector2[2] - vector2[1]*vector1[2]), (vector1[2]*vector2[0] - vector2[2]*vector1[0]), (vector1[0]*vector2[1] - vector2[0]*vector1[1])]
}
//10
function transpose(matrix) {
    let arr=[]
    for (let i=0;i<matrix[0].slice().length;i++){
      let tempArr=[]
      for (let j=0;j<matrix.slice().length;j++){
        tempArr.push(matrix[j][i])
      }
      arr.push(tempArr)
    }
    return arr
  }
  //11
  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }
  //12
function createFunctions(n) {
    var callbacks = [];
  
    for (let i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
  
    return callbacks;
}
//13
function zero(f) {return f ? f(0) : 0}
function one(f) {return f ? f(1) : 1}
function two(f) {return f ? f(2) : 2}
function three(f) {return f ? f(3) : 3}
function four(f) {return f ? f(4) : 4}
function five(f) {return f ? f(5) : 5}
function six(f) { return f ? f(6) : 6}
function seven(f) {return f ? f(7) : 7}
function eight(f) {return f ? f(8) : 8}
function nine(f) {return f ? f(9) : 9}

function plus(b) {return (a)=>a+b}
function minus(b) {return (a)=>a-b}
function times(b) { return (a)=>a*b}
function dividedBy(b) {return (a)=>Math.floor(a/b)}
//14
function createSecretHolder(secret) {
    return {
    getSecret:function(){
      return secret
      },
    setSecret:function(v){
      secret=v}
    }
  }
//15
var Cat = (function () {
    const cats = []
  
    const constructor = function (name, weight) {
      if (!name || !weight) throw Error('invalid parameters')
      Object.defineProperty(this, 'name', { get: () => name })
      Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
      cats.push(this)
    }
  
    constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length
  
    return constructor
  }())
//16
function add(n) {
    const func = x => add(n + x)
    func.valueOf = () => n
  
    return func
}
//17

function cache(func) {
    const cachedResults = {};
    return (...args) => {
      const key = JSON.stringify(args);
  
      if (!(key in cachedResults)) {
        const result = func.apply(null, args);
        cachedResults[key] = result;
      }
  
      return cachedResults[key];
    };
  }
//18
function duplicateCount(text){
    text = text.toLowerCase().split("")
     const countedletters = text.reduce((allLetters, letter) => {
       if(letter in allLetters) {
       allLetters[letter]++
       } 
       else {
       allLetters[letter] = 1
       }
       return allLetters 
       }, {})
     const filterDup = Object.values(countedletters).filter((duplicate) => duplicate >=2)
     return filterDup.length
     }
//19
function compose(f,g) {
    return function(a) {
      if (arguments.length > 1)
        return f.call(null, g.apply(null, arguments));
      else
        return f(g(a));
    }
  }
//20
function mergeWords(string) {
    return function(nextString) {
      if (nextString === undefined) {
        return string;
      } else {
        return mergeWords(string + ' ' + nextString);
      }
    }
  }
//21
function spyOn(func) {
    let calls = 0
    let all = []
    let val
  
    const spy = function(...args) {
      calls++
      all.push(...args)
      val = func.apply(this, args)
      return val
    }
  
    spy.callCount = () => calls
    spy.wasCalledWith = (x) => all.some((a) => x === a)
    spy.returned = (x) => x === val
  
    return spy
  }
//22
function expression(number, operation){
    if(!operation)
        return number;
    return operation(number);
}

function five(operation) { return expression(5, operation); }
function seven(operation) { return expression(7, operation); }

function times(x) {
    return function(y) {
        return y * x;
    }
}
seven(times(five())); // must return 35
//23
function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
      return typeof obj[methodName] == 'function';
    });
  }
//24
//25
// Best Solution

Object.prototype.hash = function(string) { var arr = string.split('.'); return arr.reduce(function(pv, cv){ return (pv) ? pv[cv] : pv; }, this); }

// Best solution #2

Object.prototype.hash = function(string) { var obj = this; string.split(".").forEach(function(el) { try { obj = obj[el]; } catch(e) { obj = undefined; } }); return obj; }
//26
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

  

