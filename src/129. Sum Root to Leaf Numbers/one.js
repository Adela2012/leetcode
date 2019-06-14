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
  return helper(root, 0)
};

var helper = function (root, sum) {
  if (root.left == null && root.right == null) {
      return sum * 10 + root.val
  }
  return helper(root.left, root.val + sum * 10) + helper(root.right, root.val + sum * 10)
}