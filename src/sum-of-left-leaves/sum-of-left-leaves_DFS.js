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
var sumOfLeftLeaves = function (root) {
  return helper(null, root)
};

var helper = function (parent, root) {
  if (!root) return 0
  if (!root.left && !root.right) {
    if (parent && parent.left == root) {
      return root.val
    }
  }
  return helper(root, root.left) + helper(root, root.right)
};
