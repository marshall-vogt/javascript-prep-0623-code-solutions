/* exported initial */

// initial(array) function

function initial(array) {
  const newArray2 = [];
  let n = 0;

  while (n < array.length - 1) {
    newArray2.push(array[n]);
    n++;
  }
  return newArray2;
}
