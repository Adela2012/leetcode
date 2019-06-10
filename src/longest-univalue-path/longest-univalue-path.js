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
var longestUnivaluePath = function(root) {
  var helper = function(root) {
      if(!root) return 0
      let left = helper(root.left)
      let right = helper(root.right)
      if(root.left) left += root.left.val == root.val ? 1: -left
      if(root.right) right += root.right.val == root.val ? 1 : -right
      
      max = Math.max(max, left + right)
      return Math.max(left, right)
  }
  var max = 0
  helper(root)
  return max
};