export function checkIfIsPalindromeWord(word) {
  const lowerWord = word.toLowerCase();
  const WORD_LENGTH = lowerWord.length - 1;
  for (let i = 0; i < WORD_LENGTH / 2; i++) {
    let initChar = lowerWord[i],
      endChar = lowerWord[WORD_LENGTH - i];
    let result = initChar === endChar;
    if (!result) return false;
  }
  return true;
}