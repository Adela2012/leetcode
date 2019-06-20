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
  let p = root
  while(p != null) {
      let cur = p
      while (cur != null) {
          if (cur.left != null) cur.left.next = cur.right
          if (cur.right != null && cur.next != null) cur.right.next = cur.next.left
          cur = cur.next
      }
      p = p.left
  }
  return root
};