/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (root == null) return []
  let arr = []

  let q = [root]
  while (q.length) {
    let l = q.length
    let max = -Number.MAX_VALUE
    for (let i = 0; i < l; i++) {
      let node = q.shift()
      max = Math.max(max, node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    arr.push(max)
  }

  return arr
};