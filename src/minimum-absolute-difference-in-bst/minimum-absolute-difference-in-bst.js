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
var getMinimumDifference = function(root) {
  let queue = []
  helper(root, queue)
  queue = queue.sort((a, b) => a - b)
  let res = Number.MAX_VALUE
  for (let i = 1; i < queue.length; i++) {
      res = Math.min(res, queue[i] - queue[i-1])
  }
  return res
};

var helper = (root, queue) => {
  if(!root) return
  queue.push(root.val)
  helper(root.left, queue)
  helper(root.right, queue)
}