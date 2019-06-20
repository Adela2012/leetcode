/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root == null) return root
  let queue = [root]
  while(queue.length > 0) {
      let pre = queue.shift(), len = queue.length, tmp
      for (let i = 0; i < len; i++) {
          if (pre.left) queue.push(pre.left)
          if (pre.right) queue.push(pre.right)
          tmp = queue.shift()
          pre.next = tmp
          pre = tmp
      }
      if (pre.left) queue.push(pre.left)
      if (pre.right) queue.push(pre.right)
      pre.next = null
  }
  return root
};