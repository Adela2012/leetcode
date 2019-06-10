/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var set = new Set(candies);
    return set.size > candies.length / 2 ? candies.length / 2 : set.size;
};