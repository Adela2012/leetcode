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
  let pre
  function rec (node) {
       if (node == null) return
      rec(node.right)
      rec(node.left)
      node.right = pre
      node.left = null
      pre = node
  }
   rec(root)
};