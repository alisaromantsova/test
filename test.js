// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test'
// ,
// "qwerty"
// , true
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль

// const int = 10;
// if (int > 10) {
//   console.log(int - 5);
// } else {
//   console.log(int + 5);
// }
//Перевірте це на варіантах 1, 10, 13.
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
// const num = prompt("add 3 num");
// if (num.length !== 3) {
//   console.log("loh");
// } else if (Number(num[0]) && Number(num[1]) && Number(num[2])) {
//   console.log(Number(num[0]) + Number(num[1]) + Number(num[2]));
// } else {
//   console.log("loh2");
// }

// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// const arr = fruits.map((item) => item.name);
// console.log(arr);
// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// let a;
// for (a = 2; a < 10; a += 2) {
//   console.log(a);
// }
// console.log(a);
// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` )
// }

// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(`цифра ${i}!`);
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// let num;
// do {
//   num = prompt("num>100");
//   alert(num);
// } while (num <= 100 && num);
// -- 5 --
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// const middle = girls.reduce((summ, girl) => summ + girl.age, 0) / girls.length;
// console.log(middle);

// --1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }
// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );
// function checkAge(age) {
//   const result = age > 18 ? true : confirm("Батьки дозволили?");
//   return result;
// }
// checkAge(6);

// const findMin = (a, b) => {
//   const result = a < b ? a : b;
//   return console.log(result);
// };
// findMin(4, 5);

//
// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );
