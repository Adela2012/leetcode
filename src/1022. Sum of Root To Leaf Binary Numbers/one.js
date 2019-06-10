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
var sumRootToLeaf = function(root) {
  return dsf(root, 0)
};

var dsf = function (node, val) {
  if (node == null) return 0
  val = val * 2 + node.val 
  return node.left == node.right  ? val : dsf(node.left, val) + dsf(node.right, val)
}