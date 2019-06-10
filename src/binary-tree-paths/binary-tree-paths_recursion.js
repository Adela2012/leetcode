/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let res = []
  if (root) helper(root, "", res)
  return res
};

var helper = function (root, path, res) {
  if (!root.left && !root.right) res.push(path + root.val)
  if (root.left) helper(root.left, path + root.val + '->', res)
  if (root.right) helper(root.right, path + root.val + '->', res)
}