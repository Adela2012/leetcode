/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let queue = [root]
  let arr = []
  while(queue.length > 0) {
      let node = queue.pop()
      if (node != null) {
          arr.push(node.val)
          for (let i = node.children.length - 1; i >= 0; i--) {
              queue.push(node.children[i])
          }
      }
  }
  return arr
};