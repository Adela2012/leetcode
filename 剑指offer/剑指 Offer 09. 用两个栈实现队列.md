# 剑指 Offer 09. 用两个栈实现队列
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

 

示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用

# 解题
1. 维护两个栈，
   1. 一个专门用于模拟队列的尾部入队stackAdd；
   2. 一个专门用于模拟队列头部出队stackDel。
2. appendTail入队时，只需要把值推入stackAdd栈中就行。
3. deleteHead出队时，需要判断stackDel队列中有没有值，
   1. 如果没有值，依次将stackAdd栈中的元素出栈，并推入stackDel栈中，这时，队列头部元素即为stackDel的顶部元素；
   2. 如果有值，将stackDel的顶部元素出栈并返回该值；
   3. 如果stackAdd和stackDel都没有值，说明队列为空，返回-1.
```js
var CQueue = function() {
    this.stackAdd = []
    this.stackDel = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackAdd.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.stackDel.length == 0) {
        while(this.stackAdd.length > 0) {
            this.stackDel.push(this.stackAdd.pop())
        }
    }

    if (this.stackDel.length == 0) {
        return -1
    } else {
        return this.stackDel.pop()
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```