/* exported reverse */

// reverse(array) function

function reverse(array) {
  const newArray3 = [];
  let n = array.length - 1;

  while (n >= 0) {
    newArray3.push(array[n]);
    n--;
  }
  return newArray3;
}
