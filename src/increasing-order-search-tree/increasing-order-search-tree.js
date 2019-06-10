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
// Runtime: 148 ms
var increasingBST = function(root) {
  let arr = []
  helper(root, arr)
  let node = new TreeNode() 
  res(node, arr)
  return node
};

var res = function(root, arr) {
  root.val = arr.shift()
  if(arr.length == 0) return
  root.right = new TreeNode()
  res(root.right, arr)
}

var helper = function (root, arr) {
   if(!root) return
   if(root.left) helper(root.left, arr)
   arr.push(root.val)
   if(root.right) helper(root.right, arr)
}; 