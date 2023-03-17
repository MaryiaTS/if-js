//Преобразование формата даты
function transformDate(date) {
  const re = /(?<year>\d+)+-+(?<month>\d+)+-+(?<day>\d+)/gm;
  const newDate = date
    .replace(re, "$<day> $<month> $<year>")
    .replace(/\s/g, ".");
  return (newDate);
}

const date1 = "2020-11-26";
console.log(transformDate(date1)); // 26.11.2020

const date2 = "2020-1-5";
console.log(transformDate(date2)); // 5.1.2020

const date3 = "22-01-5";
console.log(transformDate(date3)); // 5.01.22

//Поиск объектов размещения:
function searchData(word) {
  const data = [
    {
      country: "Russia",
      city: "Saint Petersburg",
      hotel: "Hotel Leopold",
    },
    {
      country: "Spain",
      city: "Santa Cruz de Tenerife",
      hotel: "Apartment Sunshine",
    },
    {
      country: "Slowakia",
      city: "Vysokie Tatry",
      hotel: "Villa Kunerad",
    },
    {
      country: "Germany",
      city: "Berlin",
      hotel: "Hostel Friendship",
    },
    {
      country: "Indonesia",
      city: "Bali",
      hotel: "Ubud Bali Resort&SPA",
    },
    {
      country: "Netherlands",
      city: "Rotterdam",
      hotel: "King Kong Hostel",
    },
    {
      country: "Marocco",
      city: "Ourika",
      hotel: "Rokoko Hotel",
    },
    {
      country: "Germany",
      city: "Berlin",
      hotel: "Hotel Rehberge Berlin Mitte",
    },
  ];
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].country === word ||
      data[i].city === word ||
      data[i].hotel === word
    ) {
      return [data[i].country, data[i].city, data[i].hotel].join(", ");
    }
  }
}

console.log(searchData("London"));
console.log(searchData("Spain"));
console.log(searchData("King Kong Hostel"));
console.log(searchData("Berlin"));