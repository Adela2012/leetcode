/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let set = new Set()
    for (let i = 0; i < words.length - 1; i++) {
        let cur = words[i]
        for (let j = i + 1; j < words.length; j++) {
            let nex = words[j]
            if (cur.includes(nex)) set.add(nex)
            if (nex.includes(cur)) set.add(cur)
        }
    }
    return [...set]
};