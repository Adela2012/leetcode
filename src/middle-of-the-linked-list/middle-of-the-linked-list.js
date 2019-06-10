/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  if(!head.next) return head
  let i = 0
  let point = head
  while (point.next) {
      i++
      point = point.next
  }
  let p = head
  let mid = Math.ceil(i / 2)
  while (p.next) {
      mid--
      p = p.next
      if(mid == 0) return p
  }
  
};