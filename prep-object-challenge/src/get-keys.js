/* exported getKeys */

function getKeys(object) {
  const getKeysArray = [];

  for (const property in object) {
    getKeysArray.push(property);
  }
  return getKeysArray;
}
