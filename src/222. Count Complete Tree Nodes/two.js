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
var countNodes = function (root) {
  if (root == null) return 0
  let q = [root]
  let count = 0
  while (q.length) {
    let l = q.length
    for (let i = 0; i < l; i++) {
      let node = q.shift()
      count++
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return count
};