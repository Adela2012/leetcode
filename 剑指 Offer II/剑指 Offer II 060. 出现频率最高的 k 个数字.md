# 剑指 Offer II 060. 出现频率最高的 k 个数字
给定一个整数数组 nums 和一个整数 k ，请返回其中出现频率前 k 高的元素。可以按 任意顺序 返回答案。

 

示例 1:
```
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
```
示例 2:
```
输入: nums = [1], k = 1
输出: [1]
```
 

提示：
```
1 <= nums.length <= 105
k 的取值范围是 [1, 数组中不相同的元素的个数]
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
```

进阶：所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

 

注意：本题与主站 347 题相同：https://leetcode-cn.com/problems/top-k-frequent-elements/

# 解题

## 解题1
单调栈
1. 遍历 nums 数组，使用 map 统计每个数字出现的次数。
2. 维持一个单间递减栈 MiniStack，遍历map，将次数数组[key,value]加入栈中，栈顶元素频率最高。
3. 最后返回栈的数组 key。

在MiniStack中：
1. 传入栈的大小，k，并初始化stack
2. 在add方法中，初始化临时栈tmp
   1. 如果stack有长度，并且栈顶元素小于传入的val值，则循环移出栈顶元素，到tmp中存储。
   2. 比较stack的长度是否满足k，小于k时，将val加到stack中
   3. 比较stack的长度是否满足k且tmp栈中存在值，将tmp保存的变量移到stack中
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map(), stack = []
    for (let i of nums) {
        map.set(i, 1 + (map.get(i) || 0))
    }

    this.ms = new MiniStack(k)
    for (let [key, value] of map) {
        this.ms.add([key, value])
    }
    return this.ms.getValues()
    
};


class MiniStack {
    constructor(k) {
        this.stack = []
        this.k = k
    }
    add(val) {
        const tmp = []
        while(this.stack.length && this.peek()[1] < val[1]) {
            tmp.push(this.stack.pop())
        }
        if (this.stack.length < this.k) {
            this.stack.push(val)
        }
        while(tmp.length && this.stack.length < this.k) {
            this.stack.push(tmp.pop())
        }
    }
    peek() {
        return this.stack[this.stack.length-1]
    }
    getValues() {
        return this.stack.map(i => i[0])
    }
}

```


## 解题2
1. 遍历 nums 数组，使用 map 统计每个数字出现的次数。
2. 维持一个数组 matrix，统计 map 中，将相同出现频率 v 的数字，归到 matrix[v] 中
3. 从后遍历 matrix，不断将 matrix 中的元素推入 res 中，直到 res 的长度符合 k

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()
    for (const i of nums) {
        map.set(i,  (map.get(i) || 0) + 1)
    }
    const matrix = []
    for (const [key, val] of map) {
        !matrix[val]
            ? matrix[val] = [key]
            : matrix[val].push(key)
    }
    const res = []
    for (let i = matrix.length - 1; i >= 0; i--) {
        if (res.length >= k) break
        if(matrix[i]) res.push(...matrix[i])
    }
    return res
};

```
- 时间复杂度O(N)
- 空间复杂度O(N)

## 解题3
API 使用Array.sort进行排序
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()
    for (const i of nums) {
        map.set(i,  (map.get(i) || 0) + 1)
    }
    return [...map].sort((a, b) => b[1] - a[1]).map(i => i[0]).slice(0, k)
};

```