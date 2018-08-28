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
  var helper = function(root, val) {
      if(!root) return 0
      let left = helper(root.left, root.val)
      let right = helper(root.right, root.val)
      
      max = Math.max(max, left + right)
      if(root.val == val) return Math.max(left, right) + 1
      return 0
  }
  if(!root) return 0
  var max = 0
  helper(root, root.val)
  return max
};