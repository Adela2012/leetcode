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
  let queue = [{node: root, depth: 0}]
  let map = new Map()
  while(queue.length) {
      let {node, depth} = queue.shift()
      if (node) map.set(depth, node.val)
      if (node.left) queue.push({node: node.left, depth: depth + 1})
      if (node.right) queue.push({node: node.right, depth: depth + 1})  
  }
  return [...map.values()]
};