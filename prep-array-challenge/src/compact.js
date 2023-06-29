/* exported compact */

// compact(array) function

function compact(array) {
  const newArray4 = [];

  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) !== false) {
      newArray4.push(array[i]);
    }
  }
  return newArray4;
}
