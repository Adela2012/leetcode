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
var sumOfLeftLeaves = function (root) {
  if (!root || !root.left && !root.right) return 0;
  let queue = [root]
  let sum = 0
  while (queue.length) {
    let node = queue.shift()
    if (node.left) {
      queue.push(node.left)
      let leftnode = node.left
      if (!leftnode.left && !leftnode.right) sum += leftnode.val
    }
    if (node.right) queue.push(node.right)

  }
  return sum
};