var distributeCandies = function(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
};