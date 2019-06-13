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
  let queue = []
  let inorder = -Number.MAX_VALUE
  
  while (queue.length || root != null) {
      while (root != null) {
          queue.push(root)
          root = root.left
      }
      root = queue.pop()
      
      if (root.val <= inorder) return false
      inorder = root.val
      root = root.right
  }
  return true
};