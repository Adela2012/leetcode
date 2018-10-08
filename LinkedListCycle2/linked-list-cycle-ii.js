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
var detectCycle = function(head) {
  if(!head) return null
  let fast = head
  let slow = head
  while(fast != null && fast.next != null) {

      slow = slow.next
      fast = fast.next.next
      
      if (slow == fast) {
          let p = head
          while (p != slow) {
              slow = slow.next
              p = p.next
          }
          return slow
      }
  }
  return null
};