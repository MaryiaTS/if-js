
//Напишите функцию sum, которая возвращает сумму чисел
function sum(a) {
  function plus(b) {
    return (a + b);
  }

  return plus;
}

console.log(sum(5)(2)); // 7

//Покрасьте абзацы по клику (событие click)
const i = [];
const element = [];
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

for (let a = 1; a <= 3; a++) {
  i[a] = colors.length + 1;
  element[a] = document.getElementById("text" + a);
  element[a].addEventListener("click", function () {
    i[a]++;
    if (i[a]>=colors.length) {
      i[a] = 0;
    }
    document.getElementById("text"+a).style.color = colors[i[a]];
  });
}
=======

// Функция palindrome
function palindrome(value) {
  const n = value.length - 1;
  for (let i = 0; i < value.length / 2; i++) {
    if (value[i] !== value[n - i]) {
      return false;
    }
  }
  return true;
}

let value1 = "оборка";

console.log(palindrome(value1)); //false

let value2 = "шалаш";

console.log(palindrome(value2)); //true

// Функция min(a, b) и функция max(a,b)
// min
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

let num1 = 15;
let num2 = 256;

console.log(min(num1, num2));

// min. version 2
function min2(a, b) {
  return a < b ? a : b;
}

console.log(min2(num1, num2));

// max
function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

console.log(max(num1, num2));

// max. version 2
function max2(a, b) {
  return a > b ? a : b;
}

console.log(max2(num1, num2));

// Замена элементов массива
function replaceZero(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 100) {
      if (array[i] !== 0) {
        if (array[i] % 10 === 0) {
          let a = array[i] / 10;
          newArray[i] = a + "zero";
        } else {
          newArray[i] = array[i];
        }
      } else {
        newArray[i] = "zero";
      }
    } else {
      newArray[i] = "1zerozero";
    }
  }
  return newArray;
}

const array1 = [12, 53, 20, 18, 22, 100, 43, 57, 50, 1];
console.log(replaceZero(array1));//[12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]

const array2 = [16, 38, 50, 0, 15, 97, 56, 30, 99, 90];
console.log(replaceZero(array2));//[16, 38, '5zero', 'zero', 15, 97, 56, '3zero', 99, '9zero']
