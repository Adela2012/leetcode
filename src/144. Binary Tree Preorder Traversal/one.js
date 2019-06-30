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
var preorderTraversal = function(root) {
  let q = []
  let res = []
  while (root != null) {
      res.push(root.val)
      if (root.right != null) q.push(root.right) 
      root = root.left
      if (root == null && q.lenght != 0) root = q.pop() 
  }
  return res
};