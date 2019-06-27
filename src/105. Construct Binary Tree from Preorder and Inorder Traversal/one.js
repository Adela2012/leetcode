/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return make(0 , 0, inorder.length - 1)
  
  function make(preStart, inStart, inEnd) {
      if (preStart > preorder.length - 1 || inStart > inEnd) return null
      let root = new TreeNode(preorder[preStart])
      
      let inIndex = 0
      for (let i = inStart; i <= inEnd; i++) {
          if (inorder[i] == root.val) inIndex = i
      }
      root.left = make(preStart + 1, inStart, inIndex - 1)
      root.right = make(preStart + inIndex - inStart + 1, inIndex + 1, inEnd)
      return root
  }
};