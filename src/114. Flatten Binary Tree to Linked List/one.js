/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let stack = []
  function rec (node) {
      if (node == null) return
      if (node.right) stack.push(node.right)
      node.right = node.left
      node.left = null
      if (!node.right) node.right = stack.pop()
      rec(node.right)
  }
  rec(root)
};