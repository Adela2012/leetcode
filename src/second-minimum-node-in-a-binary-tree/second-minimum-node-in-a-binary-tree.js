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
var findSecondMinimumValue = function (root) {
  let queue = [root]
  let second = Math.pow(2, 32)
  while (queue.length) {
    let node = queue.shift()
    if (node.val != root.val && node.val < second) {
      second = node.val
    }
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return second == Math.pow(2, 32) ? -1 : second
};