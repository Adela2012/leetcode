/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  return S.split(' ').map((word, i) => ('aeiou'.indexOf(word.substr(0, 1).toLowerCase()) != -1 ? word : word.substr(1) + word.substr(0, 1)) + 'ma' + 'a'.repeat(i + 1)).join(' ')
};