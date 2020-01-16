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
var rightSideView = function(root) {
  if (!root) return []
  let map = new Map()
  function dfs (node, depth) {
      if (!node) return
      if (!map.has(depth)) map.set(depth, node.val)
      dfs(node.right, depth + 1)
      dfs(node.left, depth + 1)
  }
  dfs(root, 0)
  return [...map.values()]
};