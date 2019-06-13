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
var isValidBST = function(root) {
  if (!root) return true
  let queue = [[root, null, null]]
  while (queue.length > 0) {
      let arr = queue.shift()
      let node = arr[0]
      let l = arr[1]
      let h = arr[2]
      if (l != null && node.val <= l) return false
      if (h != null && node.val >= h) return false
      if (node.left) {
          queue.push([node.left, l, node.val])
      }
      if (node.right) {
          queue.push([node.right, node.val, h])
      }
  }
  return true
};