# 剑指 Offer 11. 旋转数组的最小数字

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：
```
输入：[3,4,5,1,2]
输出：1
```
示例 2：
```
输入：[2,2,2,0,1]
输出：0
```

# 解题
## 解题1 
遍历数组，找出比前一个小的数字，返回。
```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    if (numbers.length == 1) return numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]){
            return numbers[i]
        }
    }
    return numbers[0]
};
```
- 时间复杂度： O(N)
- 空间复杂度：O(1)
  
## 解题2
遍历数组，设置最小值，找到这个最小值。
```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let min = numbers[0]
    for (let i of numbers) {
        if (i < min) min = i
    }
    return min
};
```
- 时间复杂度： O(N)
- 空间复杂度：O(1)


## 解题3
二分查找法
1. 若`numbers[mid] < numbers[right]`，说明转折点区间在左子数组`[left, mid]`，执行`right = mid`
2. 若`numbers[mid] > numbers[right]`，说明转折点区间在右子数组`[mid + 1, right]`，执行`left = mid + 1`
2. 若`numbers[mid] == numbers[right]`，说明转折点区间在左子数组`[left, right - 1]`，执行`right -= 1`
```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let left = 0, right = numbers.length - 1
    while(left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (numbers[mid] < numbers[right]) {
            right = mid
        } else if (numbers[mid] > numbers[right]) {
            left = mid + 1
        } else {
            right -= 1
        }
    }
    return numbers[left]
};
```
- 时间复杂度： O(logN)
- 空间复杂度：O(1)