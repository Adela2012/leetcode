/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var c = 0;
    for(var i = 0; i < flowerbed.length && c < n; i++) {
        if(flowerbed[i] == 0) {
            var next = (i == flowerbed.length - 1) ? 0 : flowerbed[i + 1];
            var pre = (i == 0) ? 0 : flowerbed[i - 1];
            if(next == 0 && pre == 0) {
                flowerbed[i] = 1;
                c++;
            }
        }
    }
    return c == n;
};