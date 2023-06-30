/* exported getValues */

function getValues(object) {
  const getValuesArray = [];

  for (const property in object) {
    getValuesArray.push(object[property]);
  }
  return getValuesArray;
}
