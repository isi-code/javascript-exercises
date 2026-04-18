const palindromes = function (word) {
  const w = word.toLowerCase().replace(/[\s,.!]/g, '');
  const wordArr= Array.from(w).reverse();
  const reversedWord = wordArr.join("");

  if (w === reversedWord) return true
  return false
};

// Do not edit below this line
module.exports = palindromes;
