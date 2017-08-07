/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var index1 = 0, index2 = numbers.length-1;
    while(index1 <= index2){
        if(numbers[index1] + numbers[index2] == target) {
            return [index1+1, index2+1];
        } else if(numbers[index1] + numbers[index2] > target) {
            index2--;
        } else if(numbers[index1] + numbers[index2] < target) {
            index1++;
        }
    }
    return null;

};