/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.queue = []
  this.box = []
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.queue.push(x)
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  while(this.queue.length) {
      this.box.push(this.queue.pop())
  }
  let first = this.box.pop()
  while(this.box.length) {
      this.queue.push(this.box.pop())
  }
  return first
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.queue[0]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.queue.length === 0
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = Object.create(MyQueue).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/