# 剑指 Offer II 074. 合并区间

以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

 

示例 1：
```
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```
示例 2：
```
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

提示：
```
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
```

注意：本题与主站 56 题相同： https://leetcode-cn.com/problems/merge-intervals/

# 解题
1. 首先进行排序，将区间的开始值，从小到大进行排序
2. 遍历数组，当第一个区间开始，比较当前区间的结束值 >= 下一个区间的开始值，
3. 则将区间进行合并，并将下个区间的指针j往后进一位
4. 当j超出数组长度或者不满足合并区间，则推出循环
5. 将cur推入结果数组res中，并将i指针指向j位置
6. 最后返回res结果数组
```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length == 1) return intervals
    intervals.sort((a, b) => a[0] - b[0])

    const res = []
    for (let i = 0; i < intervals.length; ) {
        const cur = [...intervals[i]]
        let j = i + 1
        while(j < intervals.length && cur[1] >= intervals[j][0]) {
            cur[1] = Math.max(cur[1], intervals[j++][1])
        }
        res.push(cur)
        i = j
    }
    return res
};
```
- 时间复杂度：O(NlogN)
- 空间复杂度：O(logN)