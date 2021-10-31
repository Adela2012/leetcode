# 剑指 Offer 59 - II. 队列的最大值
请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

示例 1：
```
输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
```
示例 2：
```
输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
```

限制：
```
1 <= push_back,pop_front,max_value的总操作数 <= 10000
1 <= value <= 10^5
```

# 解题
1. 维持两个队列，queue 和 deque。
   1. queue为正常操作队列，进行队列的出栈和入栈操作。
   2. deque为单调递减队列，执行方法max_value时，返回deque[0]。
2. 如何维持单调递减队列？
   1. 当value进入queue队列时，比value前进入队列又比value小的值不会对求最大值产生影响
   2. 举例，1,1,2依次进入队列，在2出队列前，始终是2位最大值
   3. 因此，在push_back时，如果deque的尾元素小于value时，持续推出，再将value推入deque
   4. 在pop_front时，比较推出的value值是不是为deque头元素，如果是，将deque元素推出
```js
var MaxQueue = function() {
    this.queue = []
    this.deque = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (this.queue.length == 0) return -1
    return this.deque[0]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value)
    while(this.deque[this.deque.length -1] < value) this.deque.pop()
    this.deque.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (this.queue.length == 0) return -1
    let val = this.queue.shift()
    if (val == this.deque[0]) this.deque.shift()
    return val
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```
- 时间复杂度O(1)，push_back虽然有循环，但是单个数字最多只会被推出1次。
- 空间复杂度O(N)