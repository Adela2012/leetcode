# 剑指 Offer II 041. 滑动窗口的平均值
给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。

实现 MovingAverage 类：

MovingAverage(int size) 用窗口大小 size 初始化对象。
double next(int val) 成员函数 next 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。
 

示例：
```
输入：
inputs = ["MovingAverage", "next", "next", "next", "next"]
inputs = [[3], [1], [10], [3], [5]]
输出：
[null, 1.0, 5.5, 4.66667, 6.0]

解释：
MovingAverage movingAverage = new MovingAverage(3);
movingAverage.next(1); // 返回 1.0 = 1 / 1
movingAverage.next(10); // 返回 5.5 = (1 + 10) / 2
movingAverage.next(3); // 返回 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // 返回 6.0 = (10 + 3 + 5) / 3
```

提示：
```
1 <= size <= 1000
-105 <= val <= 105
最多调用 next 方法 104 次
```

注意：本题与主站 346 题相同： https://leetcode-cn.com/problems/moving-average-from-data-stream/

# 解题

1. MovingAverage方法，
    1. 初始化一个队列queue和和sum，并记录size
2. next方法，
    1. 将val值推入队列，如果队列长度大于size，则出队列，
    2. 更新sum值，加上入队值，减去出队值
    3. 最后返回平均值 `this.sum / this.queue.length`

```js
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size
    this.queue = []
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val)
    this.sum += val
    if (this.queue.length > this.size) this.sum -= this.queue.shift()
    return this.sum / this.queue.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
```
- 时间复杂度O(1)
- 空间复杂度O(N)，N=size