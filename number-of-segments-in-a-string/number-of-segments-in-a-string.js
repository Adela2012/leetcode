/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim();
    return (s.length === 0 ? 0 : s.replace(/\s{2,}/g, ' ').split(' ').length);
};