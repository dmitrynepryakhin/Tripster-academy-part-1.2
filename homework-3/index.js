//Task 1

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
console.log( a + b );

//Task 2

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
};

console.log(`Число: ${readNumber()}`);

//Task 3

function random(min, max) {
  return min + Math.random() * (max - min);
};
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

//Task 4

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

console.log(randomInteger(1, 3));

//Task 5

let newStr = str[0].toUpperCase() + str.slice(1);

//Task 6

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
};

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );

//Task 7

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
};

//Task 8

function extractCurrencyValue(str) {
  return +str.slice(1);
};

//Task 9

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log( styles.shift() );
styles.unshift("Рэп", "Регги");

//Task 10

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  };

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(sumInput());

//Task 11

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { 
    partialSum += item; 
    maxSum = Math.max(maxSum, partialSum);  момент
    if (partialSum < 0) partialSum = 0; 
  }

  return maxSum;
};

console.log( getMaxSubSum([-1, 2, 3, -9]) ); 
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
console.log( getMaxSubSum([-2, -1, 1, 2]) ); 
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); 
console.log( getMaxSubSum([1, 2, 3]) ); 
console.log( getMaxSubSum([-1, -2, -3]) );

//Task 12

function camelize(str) {
  return str
    .split('-') 
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}

//Task 13

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr1 = [5, 3, 8, 1];
let filtered = filterRange(arr1, 1, 4);

console.log(filtered); 
console.log(arr1); 

//Task 14

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);

console.log(arr2);

//Task 15

let arr4 = [5, 2, 1, -10, 8];

arr4.sort((a, b) => b - a);

console.log(arr4);

//Task 16

function copySorted(arr) {
  return arr.slice().sort();
}

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);

console.log(sorted);
console.log(arr3);

//Task 17

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result );

//Task 18

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1 = [vasya1, petya1, masha1];

let names = users1.map(item => item.name);

console.log(names);

//Task 19

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [vasya2, petya2, masha2];

let usersMapped = users2.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log(usersMapped[0].id); 
console.log(usersMapped[0].fullName);

//Task 20

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let vasya3 = {name: "Вася", age: 25};
let petya3 = {name: "Петя", age: 30};
let masha3 = {name: "Маша", age: 28};

let arr5 = [ vasya3, petya3, masha3 ];

sortByAge(arr5);

console.log(arr5[0].name); 
console.log(arr5[1].name); 
console.log(arr5[2].name);

//Task 21

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
};

let arr6 = [1, 2, 3];
shuffle(arr);
console.log(arr);

//Task 22

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
};

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 29};

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));

//Task 28

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));

//Task 29

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
};

//Task 30

function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; 
};

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log(sumSalaries(salaries));

//Task 31

function count(obj) {
  return Object.keys(obj).length;
};

//Task 32

let user3 = {
  name4: "John",
  years: 30
};

let {name4, years: age, isAdmin = false} = user3;

console.log(name4); 
console.log(age); 
console.log(isAdmin);

//Task 33

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
};

//Task 34

let user = {
  name: "Василий Иванович",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(user));

//Task 35

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));