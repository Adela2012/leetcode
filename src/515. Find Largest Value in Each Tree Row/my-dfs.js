/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let arr = []
  dfs(root, 0)
  function dfs(root, level) {
    if (root == null) return
    if (level == arr.length) {
      arr[level] = root.val
    } else if (root.val > arr[level]) {
      arr[level] = root.val
    }
    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  }
  return arr
};