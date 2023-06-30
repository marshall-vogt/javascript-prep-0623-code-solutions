/* exported toObject */

function toObject(keyValuePair) {
  const object = {};
  const x = keyValuePair.shift();
  const y = keyValuePair.shift();
  object[x] = y;
  return object;
}
