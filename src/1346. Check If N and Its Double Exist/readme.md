# 1346. Check If N and Its Double Exist
Easy

Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 
```
Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
```
```
Example 2:

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
```
```
Example 3:

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.
```

Constraints:

2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3


---


有一段时间没有做题了，先做道简单题吧。给一个数字数组，判断数组中是否存在一个数是另一数的2倍大小。

- force暴力拆解法
- map + 两次循环
- set + 一次循环

### force暴力拆解法
暴力拆解法就是双次循环，每次对两个值进行判断
- 复杂度分析
  - 时间复杂度：O(N^2)， N是数组长度
  - 空间复杂度：O(N)
```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == 2 * arr[j] && i !== j)
                return true
        }
    }
    return false
};
```
### map
通过使用map，存储arr的值和下标。在第二次循环arr时，通过比较该值的双倍是否在map中存在，如果存在，并且下标不一致，就返回true。
- 复杂度分析
  - 时间复杂度：O(N)， N是数组长度
  - 空间复杂度：O(N)
```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i)
    }
    for (let i = 0; i < arr.length; i++) {
        let double = arr[i] * 2
        if (map.has(double) && map.get(double) !== i) return true
    }
    return false
};
```


### set
循环时判断，该值的一半或者2倍是否在set中存在，如果存在，就返回true，如果不在，则使用set来存储该循环中值。
- 复杂度分析
  - 时间复杂度：O(N)， N是数组长度
  - 空间复杂度：O(N)
```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let set = new Set()
    for (let i of arr) {
        if (set.has(2*i) || i % 2 == 0 && set.has(Math.floor(i / 2))) return true
        set.add(i)
    }
    return false
};
```

### 来源
- [leetcode](https://leetcode.com/problems/check-if-n-and-its-double-exist/)