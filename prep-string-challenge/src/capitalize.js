/* exported capitalize */

function capitalize(word) {
  const firstLetter = word.charAt(0);
  const subString = word.slice(1);
  const firstLetterCap = firstLetter.toUpperCase();
  const subStringLow = subString.toLowerCase();
  const newWord = firstLetterCap + subStringLow;
  return newWord;
}
