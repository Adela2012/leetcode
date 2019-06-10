/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if(!root) return 0
  return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};

var helper = function(node, sum) {
  if(!node) return 0
  return (node.val == sum ? 1 : 0) + helper(node.left, sum - node.val) + helper(node.right, sum - node.val)
};
