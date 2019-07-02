/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = []
  this.root = root
};

/**
* @return the next smallest number
* @return {number}
*/
BSTIterator.prototype.next = function() {
  while(this.root) {
      this.stack.push(this.root)
      this.root = this.root.left
  }
  this.root = this.stack.pop()
  let res = this.root.val
  this.root = this.root.right
  return res
};

/**
* @return whether we have a next smallest number
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
  return this.root || this.stack.length 
};

/** 
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/