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
var maxProduct = function(root) {
  const subSums = new Uint32Array(50000)
  let max = idx = 0
  const sum = helper(root)
  for (let i = 0; i < idx; i++) {
      max = Math.max((sum - subSums[i]) * subSums[i], max)
  }
  return max % (1e9 + 7)
  
  function helper(node) {
      const subSum = node.val + (node.left ? helper(node.left) : 0) + (node.right ? helper(node.right) : 0)
      subSums[idx++] = subSum
      return subSum
  }
};