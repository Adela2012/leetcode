/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (root == null) return 0
  let stack = [root]
  let sum = 0
  
  while (stack.length > 0) {
      let node = stack.shift()
      if(node.left) {
          node.left.val = node.val * 10 + node.left.val
          stack.push(node.left)
      }
      if(node.right) {
          node.right.val = node.val * 10 + node.right.val
          stack.push(node.right)
      }
      if (node.left == null && node.right == null) {
          sum += node.val
      }
  }
  return sum
  
};