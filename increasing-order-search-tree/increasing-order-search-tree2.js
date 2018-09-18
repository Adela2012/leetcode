/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Runtime: 140 ms
var increasingBST = function(root) {
  let arr = []
  helper(root, arr)
  let res = new TreeNode()
  let tmp = res
  for(let i = 0; i < arr.length; i++) {
      tmp.val = arr[i]
      if(i < arr.length - 1) {
          tmp.right = new TreeNode()
          tmp = tmp.right
      }
  }
  return res
};


var helper = function (root, arr) {
   if(!root) return
   if(root.left) helper(root.left, arr)
   arr.push(root.val)
   if(root.right) helper(root.right, arr)
}; 