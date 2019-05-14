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
var postorder = function(root) {
  let arr = []
  let queue = [root]
  while(queue.length > 0) {
      let node = queue.pop()
      if (node != null) {
          arr.unshift(node.val)
          for (let i of node.children) {
              queue.push(i)
          }
      }
  }
  return arr
};