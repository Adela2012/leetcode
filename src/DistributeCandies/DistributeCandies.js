/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var set = new Set();
    for (var i = 0; i < candies.length; i++) set.add(candies[i]);
    return set.size > candies.length / 2 ? candies.length / 2 : set.size;
};