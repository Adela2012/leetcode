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
var findTilt = function (root) {
  var sum = 0
  var helper = function (root) {
    if (!root) return 0
    let left = helper(root.left)
    let right = helper(root.right)
    sum += Math.abs(left - right)
    return root.val + left + right
  }
  helper(root)
  return sum

};


