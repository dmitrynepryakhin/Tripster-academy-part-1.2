//Task 1.1

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumTo(100));

//Task 1.2

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
};

console.log(sumTo(100));

//Task 1.3

function sumTo(n) {
  return n * (n + 1) / 2;
};

console.log(sumTo(100));

//Task 2

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
};

console.log(factorial(5));

//Task 3

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

console.log(fib(3)); 
console.log(fib(7)); 
console.log(fib(77));

//Task 4

let list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  console.log(list.value); 

  if (list.next) {
    printList(list.next); 
  }

};

printList(list1);

//Task 5

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
};

printReverseList(list);

//Task 6

function sum(a) {

  return function(b) {
    return a + b; 
  };
};

console.log(sum(1)(2)); 
console.log(sum(5)(-1));

//Task 7.1

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
};

let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.filter(inBetween(3, 6)));

//Task 7.2

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
};

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([1, 2, 10])));

//Task 8

function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
};

//Task 9

function makeArmy() {

  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() { 
      console.log(i); 
    };
    shooters.push(shooter);
  }

  return shooters;
};

let army = makeArmy();

army[0]();
army[5]();