/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return make(0, inorder.length - 1, 0, postorder.length - 1)

  function make(inStart, inEnd, postStart, postEnd) {
    if (postEnd < postStart || postStart > postEnd) return null
    var root = new TreeNode(postorder[postEnd])

    let inIndex
    for (let i = inStart; i <= inEnd; i++) {
      if (root.val == inorder[i]) {
        inIndex = i
        break;
      }
    }

    root.left = make(inStart, inIndex - 1, postStart, postStart - inStart - 1 + inIndex)
    root.right = make(inIndex + 1, inEnd, postEnd - inEnd + inIndex, postEnd - 1)
    return root
  }
};