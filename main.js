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

//Преобразование формата даты
function transformDate(date) {
  const re = /(?<year>\d+)+-+(?<month>\d+)+-+(?<day>\d+)/gm;
  const newDate = date.replace(re, '$<day> $<month> $<year>').replace(/\s/g, ".")
  console.log(newDate);
}

const date1 = '2020-11-26';
transformDate(date1); // 26.11.2020

const date2 = '2020-1-5';
transformDate(date2); // 5.1.2020

const date3 = '22-01-5';
transformDate(date3); // 5.01.22

//Поиск объектов размещения:
function searchData(word) {
  const data = [
    {
      country: 'Russia',
      city: 'Saint Petersburg',
      hotel: 'Hotel Leopold',
    },
    {
      country: 'Spain',
      city: 'Santa Cruz de Tenerife',
      hotel: 'Apartment Sunshine',
    },
    {
      country: 'Slowakia',
      city: 'Vysokie Tatry',
      hotel: 'Villa Kunerad',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hostel Friendship',
    },
    {
      country: 'Indonesia',
      city: 'Bali',
      hotel: 'Ubud Bali Resort&SPA',
    },
    {
      country: 'Netherlands',
      city: 'Rotterdam',
      hotel: 'King Kong Hostel',
    },
    {
      country: 'Marocco',
      city: 'Ourika',
      hotel: 'Rokoko Hotel',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hotel Rehberge Berlin Mitte',
    },
  ];
  for (let i = 0; i < data.length; i++) {
    if (data[i].country === word || data[i].city === word || data[i].hotel === word) {
      console.log([data[i].country, data[i].city, data[i].hotel].join(', '));
    }
  }
}

searchData('London');
searchData('Spain');
searchData('King Kong Hostel');
searchData('Berlin');
