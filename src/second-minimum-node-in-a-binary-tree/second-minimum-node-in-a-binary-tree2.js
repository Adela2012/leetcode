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
var findSecondMinimumValue = function (root) {
  if (!root.left) return -1
  let l = root.val == root.left.val ? findSecondMinimumValue(root.left) : root.left.val
  let r = root.val == root.right.val ? findSecondMinimumValue(root.right) : root.right.val
  return l == -1 || r == -1 ? Math.max(l, r) : Math.min(l, r)
};