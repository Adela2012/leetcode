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
var countNodes = function (root) {
  let count = 0
  dfs(root)

  function dfs(node) {
    if (node == null) return
    count += 1
    if (node.left) dfs(node.left)
    if (node.right) dfs(node.right)
  }
  return count
};