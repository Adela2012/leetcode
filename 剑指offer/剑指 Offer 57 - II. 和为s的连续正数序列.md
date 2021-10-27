# 剑指 Offer 57 - II. 和为s的连续正数序列

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：
```
输入：target = 9
输出：[[2,3,4],[4,5]]
```
示例 2：
```
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
```
 

限制：
```
1 <= target <= 10^5
```

# 解题
1. 双指针i, j，s为[i, j]区间的和
2. 比较区间和s和target的大小
3. 若一样大，就将该区间[i, j]的值推入到结果数组res中
4. 若s >= target，说明应该减小区间[i, j]，将区间和s减去i，并执行i++
5. 若s < target，说明应该扩大区间[i, j]，执行j++，并区间和s加上j
```js
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let i = 1, j = 2, s = 3, res = []
    while(i < j) {
        if (s == target) {
            let arr = []
            for (let k = i; k <= j; k++) arr.push(k)
            res.push(arr)
        } 
        if (s >= target) {
            s -= i
            i++
        } else {
            j++
            s += j
        }
    }
    return res
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)