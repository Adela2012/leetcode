/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  return dsf(root, 0, [])
};

var dsf = function (node, level, arr) {
  if (!node) return arr
  let list = arr.length <= level ? [] : arr[level]
  if (arr.length <= level) arr.push(list)
  list.push(node.val)
  for (let i of node.children) {
      dsf(i, level+1, arr)
  }
  return arr
}