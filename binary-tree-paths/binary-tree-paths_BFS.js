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
  let queue = [[root, []]]
  let paths = []
  while (queue.length) {
    let [node, path] = queue.shift()
    if (!node.left && !node.right) {
      paths.push([...path, node.val].join('->'))
    }
    if (node.left) queue.push([node.left, [...path, node.val]])
    if (node.right) queue.push([node.right, [...path, node.val]])
  }
  return paths
};