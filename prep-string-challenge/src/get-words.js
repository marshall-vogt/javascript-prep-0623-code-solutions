/* exported getWords */

function getWords(string) {
  const stringArray = string.split(' ');

  if (Boolean(string) === true) {
    return stringArray;
  } else {
    return [];
  }
}
