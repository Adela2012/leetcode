/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let  res = 0
  let stack = []
  stack.push(root) 
  while (stack.length > 0) {
      let node = stack.shift()
      if (node != null) {
          if (L <= node.val && node.val <= R) {
              res += node.val
          }
          if (L < node.val) {
              stack.push(node.left)
          }
          if (R > node.val) {
              stack.push(node.right)
          }
      }
  }
  return res
};