/* exported tail */

// tail(array) function

function tail(array) {
  const newArray1 = [];
  let n = 1;

  while (n < array.length) {
    newArray1.push(array[n]);
    n++;
  }
  return newArray1;
}
