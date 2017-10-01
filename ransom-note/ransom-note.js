/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let len = magazine.length;
    for (let s of ransomNote) {
        magazine = magazine.replace(s, '');
    }
    return ransomNote.length + magazine.length === len;
};