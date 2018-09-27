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
var minDiffInBST = function(root) {
  let res = Number.MAX_VALUE
  let prev
  var helper = (root) => {
      if (!root) return
      helper(root.left)
      if(prev) res = Math.min(res, root.val - prev)
      prev = root.val
      helper(root.right)
  }
  helper(root)
  return res
};