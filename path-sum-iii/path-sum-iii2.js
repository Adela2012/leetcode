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
  return helper(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};

var helper = (root, pre, sum) => {
  if(!root) return 0
  let total = pre + root.val
  return (total == sum ? 1 : 0) + helper(root.left, total, sum) + helper(root.right, total, sum)
}

