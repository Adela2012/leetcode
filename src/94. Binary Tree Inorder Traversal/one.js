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
var inorderTraversal = function(root) {
  let res = []
  let cur = root
  let pre
  
  while(cur != null) {
      if (cur.left == null) {
          res.push(cur.val)
          cur = cur.right
      } else {
          pre = cur.left
          while(pre.right != null) {
              pre = pre.right
          }
          pre.right = cur
          let tmp = cur
          cur = cur.left
          
          tmp.left = null
      }
  }
  return res
};