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
var isUnivalTree = function(root) {
  let val = root.val
  let queue = [root]
  while (queue.length >0) {
      let node = queue.shift()
      if (node.val != val) return false
      if (node.left != null) queue.push(node.left)
      if (node.right != null) queue.push(node.right)
  }
  return true
};