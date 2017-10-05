/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return word == word.toUpperCase() || word == word.substr(0,1) + word.substr(1).toLowerCase();
};