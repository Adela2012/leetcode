/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  let i = 0
  return make(Number.MAX_VALUE)
  function make(bound) {
      if (i == preorder.length || preorder[i] > bound) return null
      let root = new TreeNode(preorder[i++])
      root.left = make(root.val)
      root.right = make(bound)
      return root
  }
};