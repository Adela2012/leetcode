/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let obj = {};
    list1.forEach((item, i) => {
        obj[item] = i;
    });
    let min = Infinity;
    list2.forEach((item, i) => {
        if(item in obj) {
            min = Math.min(min, i + obj[item]);
        }
    });
    return list2.filter((item, i) => {
        return obj[item] + i === min;
    });
};