/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0
  var helper = function (root) {
    if (!root) return root
    helper(root.right)
    root.val += sum
    sum = root.val
    helper(root.left)
    return root
  }
  return helper(root)
};