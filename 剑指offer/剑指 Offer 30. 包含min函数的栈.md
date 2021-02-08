# 剑指 Offer 30. 包含min函数的栈
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

 

示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
 

提示：

各函数的调用总次数不超过 20000 次
 

注意：本题与主站 155 题相同：https://leetcode-cn.com/problems/min-stack/

# 解题
**解法1**
```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minVal = Number.MAX_VALUE
    this.topVal = -1
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (x <= this.minVal) {
        this.stack[++this.topVal] = this.minVal
        this.minVal = x
    }
    this.stack[++this.topVal] = x
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack[this.topVal] == this.minVal) {
        this.minVal = this.stack[--this.topVal]
    }
    --this.topVal
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.topVal]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minVal
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```

**解法2**
```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minVal = Number.MAX_VALUE
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (x <= this.minVal) {
        this.stack.push(this.minVal)
        this.minVal = x
    }
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popVal = this.stack.pop()
    if (popVal == this.minVal) {
        let nextMin = this.stack.pop()
        this.minVal = nextMin
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minVal
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```


**解法3**
```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if (this.minStack.length == 0 || x <= this.min()) {
        this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popVal = this.stack.pop()
    if (popVal == this.min()) {
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```