//Напишите функцию sum, которая возвращает сумму чисел
function sum(a) {
  function plus(b) {
    return (a += b);
  }

  return plus;
}

console.log(sum(5)(2)); // 7

//Покрасьте абзацы по клику (событие click)
const i = [];
const element = [];
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

for (let a = 1; a <= 3; a++) {
  i[a] = 0
  element[a] = document.getElementById("text" + a);
  console.log(element[a]);
  element[a].addEventListener("click", function () {
    i[a]++;
    if (i[a]>colors.length) {
      i[a] = 0;
    }
    document.getElementById("text"+a).style.color = colors[i[a]];
  });
}