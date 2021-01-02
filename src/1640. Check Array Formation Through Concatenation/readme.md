## 1640. Check Array Formation Through Concatenation
Easy

You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

Return true if it is possible to form the array arr from pieces. Otherwise, return false.

 

Example 1:
```
Input: arr = [85], pieces = [[85]]
Output: true
```
Example 2:
```
Input: arr = [15,88], pieces = [[88],[15]]
Output: true
Explanation: Concatenate [15] then [88]
```
Example 3:
```
Input: arr = [49,18,16], pieces = [[16,18,49]]
Output: false
Explanation: Even though the numbers match, we cannot reorder pieces[0].
```
Example 4:
```
Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
Output: true
Explanation: Concatenate [91] then [4,64] then [78]
```
Example 5:
```
Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
Output: false
 ```

Constraints:

- 1 <= pieces.length <= arr.length <= 100
- sum(pieces[i].length) == arr.length
- 1 <= pieces[i].length <= arr.length
- 1 <= arr[i], pieces[i][j] <= 100
- The integers in arr are distinct.
- The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).

-----------------------------------------

![logo](https://pic.leetcode-cn.com/1609555286-CFfWVm-file_1609555286133){:width="0" height="0" align="left"}


## 1640. 能否连接形成数组
给你一个整数数组 arr ，数组中的每个整数 互不相同 。另有一个由整数数组构成的数组 pieces，其中的整数也 互不相同 。请你以 任意顺序 连接 pieces 中的数组以形成 arr 。但是，不允许 对每个数组 pieces[i] 中的整数重新排序。

如果可以连接 pieces 中的数组形成 arr ，返回 true ；否则，返回 false 。

 

示例 1：
```
输入：arr = [85], pieces = [[85]]
输出：true
```
示例 2：
```
输入：arr = [15,88], pieces = [[88],[15]]
输出：true
解释：依次连接 [15] 和 [88]
```
示例 3：
```
输入：arr = [49,18,16], pieces = [[16,18,49]]
输出：false
解释：即便数字相符，也不能重新排列 pieces[0]
```
示例 4：
```
输入：arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
输出：true
解释：依次连接 [91]、[4,64] 和 [78]
```
示例 5：
```
输入：arr = [1,3,5,7], pieces = [[2,4,6,8]]
输出：false
```

提示：

- 1 <= pieces.length <= arr.length <= 100
- sum(pieces[i].length) == arr.length
- 1 <= pieces[i].length <= arr.length
- 1 <= arr[i], pieces[i][j] <= 100
- arr 中的整数 互不相同
- pieces 中的整数 互不相同（也就是说，如果将 pieces 扁平化成一维数组，数组中的所有整数互不相同）

## 解题

### 解法1
因为arr中的整数互不相同，pieces中的整数也互不相同。所以我们只需要遍历arr数组，并找到pieces中的数组第一个值与之相同，就能找到pieces中的那个需要遍历的数组，并且将该数组在pieces中删除。
最后遍历完arr数组，判断如果pieces数组为空，那么两者数字相同。

```js
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    for(let i = 0; i < arr.length;) {
        let num = arr[i]
        let pIndex = pieces.findIndex(p => p[0] == num)
        if (pIndex < 0)  return false
        else {
            let pArr = pieces.splice(pIndex, 1)[0]
            for (let j = 0; j < pArr.length; j++) {
                if (pArr[j] !== arr[i]) return false
                else i++; 
            }
        }
    }
    return pieces.length == 0
};
```
**复杂度分析**
- 时间复杂度：O(n)，其中 n 为 输入 arr 数组的长度。
- 空间复杂度：O(1)。

### 解法2
在解法1的基础上，我们还可以使用map预存，替换找到pieces中的数组的过程。
```js
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let map = new Map()
    for (let piece of pieces) {
        map.set(piece[0], piece)
    }
    for(let i = 0; i < arr.length;) {
        let num = arr[i]
        if (!map.has(num)) return false
        let pArr = map.get(num)
        for (let j = 0; j < pArr.length; j++) {
            if (pArr[j] !== arr[i]) return false
            else i++; 
        }
    }
    return true
};
```

### 解法3

因为题目中有说sum(pieces[i].length) == arr.length。所以其实不用考虑piecies有没有比arr多或者少的数值，只要保证，pieces中的顺序数值在arr中都能找到就行。

```js
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let str = arr.toString()+','
    for (let i = 0; i < pieces.length; i++) {
        let s = pieces[i].toString()+','
        if (!str.includes(s)) return false 
    }
    return true
};
```

