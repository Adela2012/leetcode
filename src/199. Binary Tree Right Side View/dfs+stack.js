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
var rightSideView = function(root) {
  if (!root) return []
  let map = new Map()
  let stack = [{node: root, depth: 0}]
  while(stack.length) {
      let {node, depth} = stack.pop()
      if (!map.has(depth) && node) map.set(depth, node.val)
      if (node.left) stack.push({node: node.left, depth: depth + 1})
      if (node.right) stack.push({node: node.right, depth: depth + 1})
  }
  return [...map.values()]
};