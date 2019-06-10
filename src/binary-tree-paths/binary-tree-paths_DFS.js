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
  if (!root) return []
  let left = binaryTreePaths(root.left)
  let right = binaryTreePaths(root.right)
  let res = []
  if (left.length === 0 && right.length === 0) {
    res.push(`${root.val}`)
  } else {
    res = res.concat(left.map(path => `${root.val}->${path}`));
    res = res.concat(right.map(path => `${root.val}->${path}`));
  }
  return res
};