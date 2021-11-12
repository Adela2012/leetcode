# 剑指 Offer II 035. 最小时间差
给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

 

示例 1：
```
输入：timePoints = ["23:59","00:00"]
输出：1
```
示例 2：
```
输入：timePoints = ["00:00","23:59","00:00"]
输出：0
```

提示：
```
2 <= timePoints <= 2 * 104
timePoints[i] 格式为 "HH:MM"
```

注意：本题与主站 539 题相同： https://leetcode-cn.com/problems/minimum-time-difference/

# 解题
## 解题1
1. 将timePoints从字符串转化成多少分钟
   1. 小时 * 60 + 分钟
2. 数组分钟两两对比，取最小值
```js
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    for (let i in timePoints) {
        const [h, m] = timePoints[i].split(':')
        let times = Number(h) * 60 + Number(m)
        timePoints[i] = times
    }
    let abs = 24*60 , min = abs
    for (let i = 0; i < timePoints.length; i++) {
        for (let j = i+1; j < timePoints.length; j++) {
            const tmp = Math.abs(timePoints[i] - timePoints[j])
            min = Math.min(min, tmp, abs-tmp)
        }
    }
    return min
};
```
- 时间复杂度O(N^2)
- 空间复杂度O(1)

## 解题2
1. 一天的分钟数有限，size = 24 * 60，可以通过arr下标的方式记录时间点
2. 特殊情况处理：如果timePoints的长度大于size，说明有重复的时间点，因此，最小时间差为0
3. 将timePoints[i]从字符串转化成多少分钟，并存在对应的arr[times]中
   1. 如果arr[times]已经存在，说明重复，因此，最小时间差为0
4. 遍历arr数组，记录最小值
```js
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const size = 24*60, arr = new Array(size).fill(0)
    if (timePoints.length >= size) return 0

    for (let i in timePoints) {
        const [h, m] = timePoints[i].split(':')
        let times = Number(h) * 60 + Number(m)
        if (arr[times]) return 0
        arr[times] = 1
    }

    let min = size, prev = -1, first = size - 1, last = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            if (prev == -1) {
                prev = i
                first = i
            } else {
                min = Math.min(min, i - prev)
                prev = i
                last = Math.max(last, i)
            }
        }
    }
    return Math.min(min, size - last + first)
};
```
- 时间复杂度O(N)=O(1)，N为timePoints的长度，N<=1441
- 空间复杂度O(1)