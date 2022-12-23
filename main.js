//Working with variables
let user = "John Doe";
console.log(user);
const student = 'Mariya Tsimashkova';
console.log(student);
    user = student;
//expected output: "Mariya Tsimashkova"
console.log(user);


//Working with primitives
let test = 1;
    test++;
    test += '1';
//expected output: "21"
console.log(test);
test -= 1;
//expected output: "20"
console.log(test);
test = Boolean();
//expected output: "false"
console.log(test);

// Working with Arrays
//1st task
let result1 = 1;
const array1 = [2, 3, 5, 8];

for (let i = 0; i < array1.length; i++) {
    result1 *= array1[i];
}

console.log(result1);

//2nd task
const array2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 5 && array2[i] < 10) {
        console.log(array2[i]);
    }
}

//3rd task
const array3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 === 0) {
        console.log(array3[i]);
    }
}




