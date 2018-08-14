/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let map = new Set()
  var helper = function (root) {
    if (!root) return false
    if (map.has(root.val)) {
      return true
    } else {
      map.add(k - root.val)
    }
    return helper(root.left) || helper(root.right)
  }
  return helper(root)

};