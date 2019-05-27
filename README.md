# tata
做过的LeetCode的题目记录一下。

对一些比较经典的题型进行分类总结。

##【目录】：

- [x] <a href='#sliding-window'>滑动窗口</a>
- [ ] <a href='#wait'>路径（深度优先（DFS）、广度优先（BFS））</a>
- [ ] <a href='#wait'>动态规划</a>
- [ ] <a href='#wait'>贪心</a>
- [ ] <a href='#wait'>二叉树（先序、后序）</a>
- [ ] <a href='#wait'>排序（插入、选择、快速、归并、计数）</a>
- [ ] <a href='#wait'>查找</a>
- [ ] <a href='#wait'>回文</a>
- [ ] <a href='#wait'>链表</a>
- [ ] <a href='#wait'>算数</a>
- [ ] <a href='#wait'>二进制</a>




##【内容】：

### <a name='#sliding-window'>滑动窗口</a>

#### 原题 [1052. Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/)

【题目】
```
Today, the bookstore owner has a store open for customers.length minutes.  Every minute, some number of customers (customers[i]) enter the store, and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy.  If the bookstore owner is grumpy on the i-th minute, grumpy[i] = 1, otherwise grumpy[i] = 0.  When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for X minutes straight, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

```

这道题是说，在`grumpy`数组的i项`grumpy[i]`为0时，计算`Customers`同下标i的数量`Customers[i]`。同时，有`X`连续时间，可以无视`grumpy`的值。那么这个`X`就是窗口长度了。

【举例】
```
Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
```

【思路】

`sum`用来求值所有`grumpy[i]`为0时候的总值。同时维护一个X的窗口，总值为`win`, `win`在相加个数大于X时，减去窗口前的数`i-X`。`maxWin`为每次窗口变动后的最大值，用Math.max函数来取最大窗口值，当前窗口值。  

```js
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let sum = 0
    let maxWin = 0
    let win = 0
    for (let i = 0; i < customers.length; i++) {
        sum += grumpy[i] === 0 ? customers[i] : 0
        win += grumpy[i] * customers[i]
        if ( i >= X) win -= grumpy[i-X] * customers[i-X]
        maxWin = Math.max(win, maxWin)
    }
    
    
    return sum + maxWin
};
```

