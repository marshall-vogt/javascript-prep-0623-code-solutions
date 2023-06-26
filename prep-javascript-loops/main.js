// create your loops here.

// #1 //
function whileLoop1() {
  const array1 = [];
  let n = 0;
  while (n < 10) {
    array1.push(n);
    n++;
  }
  return array1;
}

console.log('whileLoop1 output', whileLoop1());

// #2 //

function whileLoop2() {
  const array2 = [];
  let n = 0;
  while (n < 20) {
    array2.push(n);
    n += 2;
  }
  return array2;
}

console.log('whileLoop2 output', whileLoop2());

// #3 //

function forLoop1() {
  const array3 = [];
  for (let i = 0; i < 10; i++) {
    array3.push(i);
  }
  return array3;
}

console.log('forLoop1 output', forLoop1());

// #4 //

function forLoop2() {
  const string = 'Time till explosion: ';
  for (let i = 100; i > 0; i--) {
    console.log(string + i + '!');
  }
}

console.log(forLoop2());

// #5 //

function forInLoop1(object) {
  const array5 = [];
  for (const propertyName in object) {
    array5.push(propertyName);
  }
  console.log(array5);
}
const object = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
console.log(forInLoop1(object));

// #6 //

function forInLoop2(object) {
  const array6 = [];
  for (const propertyValue in object) {
    array6.push(object[propertyValue]);
  }
  console.log(array6);
}

console.log(forInLoop2(object));
