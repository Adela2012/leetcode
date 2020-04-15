/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.filter((x, i) => {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(x)) {
                return true
            }
        }
        return false
    })
};