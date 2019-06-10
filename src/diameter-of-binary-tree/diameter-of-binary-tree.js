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
var diameterOfBinaryTree = function (root) {
  var res = 0
  var helper = function (root) {
    if (!root) return 0
    let left = helper(root.left)
    let right = helper(root.right)
    res = Math.max(res, left + right)
    return Math.max(left, right) + 1
  }
  helper(root)
  return res
};