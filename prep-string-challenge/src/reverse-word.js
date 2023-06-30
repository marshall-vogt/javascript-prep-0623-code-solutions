/* exported reverseWord */

function reverseWord(word) {
  let wordReversed = '';

  let i = word.length - 1;
  while (i >= 0) {
    wordReversed += word[i];
    i--;
  }
  return wordReversed;
}
