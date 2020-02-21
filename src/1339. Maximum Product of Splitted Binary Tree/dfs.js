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
  var max = 0
  var sum = subSum(root)
  subSum(root, sum)
  return max % (1e9 + 7);
    
  function subSum (node) {
      if(!node) return 0
      let sSum = node.val + subSum(node.left) + subSum(node.right)
      sum && (max = Math.max(max, (sum - sSum) * sSum))
      return sSum
  }
};
