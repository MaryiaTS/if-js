// //Working with variables
// let user = "John Doe";
// console.log(user);
// const student = "Mariya Tsimashkova";
// console.log(student);
// user = student;
// //expected output: "Mariya Tsimashkova"
// console.log(user);
//
// //Working with primitives
// let test = 1;
// test++;
// test += "1";
// //expected output: "21"
// console.log(test);
// test -= 1;
// //expected output: "20"
// console.log(test);
// test = Boolean(test);
// //expected output: "true"
// console.log(test);
//
// // Working with Arrays
// //1st task
// let result1 = 1;
// const array1 = [2, 3, 5, 8];
//
// for (let i = 0; i < array1.length; i++) {
//   result1 *= array1[i];
// }
//
// console.log(result1);
//
// //2nd task
// const array2 = [2, 5, 8, 15, 0, 6, 20, 3];
//
// for (let i = 0; i < array2.length; i++) {
//   if (array2[i] > 5 && array2[i] < 10) {
//     console.log(array2[i]);
//   }
// }
//
// //3rd task
// const array3 = [2, 5, 8, 15, 0, 6, 20, 3];
//
// for (let i = 0; i < array3.length; i++) {
//   if (array3[i] % 2 === 0) {
//     console.log(array3[i]);
//   }
// }

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
  console.log(newArray);
}

const array1 = [12, 53, 20, 18, 22, 100, 43, 57, 50, 1];//[12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]
replaceZero(array1);

const array2 = [16, 38, 50, 0, 15, 97, 56, 30, 99, 90];//[16, 38, '5zero', 'zero', 15, 97, 56, '3zero', 99, '9zero']
replaceZero(array2);
