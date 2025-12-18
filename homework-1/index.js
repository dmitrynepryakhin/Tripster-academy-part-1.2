//Task 2

let admin, name; 
name = "Джон";
admin = fame;
console.log(admin); 

//Task 3

let ourPlanet = "Земля";
let currentUserName = "Дима";

//Task 4

let name1 = prompt("Ваше имя?", "");
console.log(name1);

//Task 5

let value1 = prompt('Какое "официальное" название JavaScript?', '');

if (value1 == 'ECMAScript') {
  console.log('Верно!');
} else {
  console.log('Не знаете? ECMAScript!');
};

//Task 6

let value = prompt('Введите число', 0);

if (value > 0) {
  console.log(1);
} else if (value < 0) {
  console.log(-1);
} else {
  console.log(0);
};

//Task 7 

result = (a + b < 4) ? 'Мало' : 'Много';

//Task 8

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

//Task 9

let message1 = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

//Task 10

if (age >= 14 && age <= 90);

//Task 11

if (!(age >= 14 && age <= 90));

if (age < 14 || age > 90);

//Task 12

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    console.log( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    console.log( 'Отменено' );
  } else {
    console.log( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  console.log( 'Отменено' );
} else {
  console.log( "Я вас не знаю" );
};

//Task 13

let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2;

//Task 14 

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log( i );
  }
};

//Task 15

let i = 0;
while (i < 3) {
  console.log( `number ${i}!` );
  i++;
};

//Task 16

let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

// Task 17

let n1 = 10;
nextPrime:
for (let i = 2; i <= n1; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  console.log( i );
};

// Task 18

if(browser == 'Edge') {
  console.log("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  console.log('Okay we support these browsers too');
} else {
  console.log('We hope that this page looks ok!');
}

//Task 19

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    console.log('Вы ввели число 0');
    break;

  case 1:
    console.log('Вы ввели число 1');
    break;

  case 2:
  case 3:
    console.log('Вы ввели число 2, а может и 3');
    break;
};

//Task 20

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
};

//Task 21

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

//Task 22

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
};

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n >= 1 && n % 1 == 0) {
  console.log(pow(x, n));
} else {
  console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
};

//Task 23

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
};

ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);