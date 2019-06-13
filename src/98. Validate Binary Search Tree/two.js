/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return recursion(root, null, null)
};

var recursion = function(node, low, high) {
  if (node == null) return true
  
  if (low != null && node.val <= low) return false
  if (high != null && node.val >= high) return false
  
  if (!recursion(node.right, node.val, high)) return false
  if (!recursion(node.left, low, node.val)) return false
  
  return true

}