/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode fast =  head, slow = head, p = head;
        
        while (true) {
            if(fast == null || fast.next == null) return null;
            slow = slow.next;
            fast = fast.next.next;
            if(slow ==  fast) break;
        }
 
        while(p != slow) {
            p = p.next;
            slow = slow.next;
        }
        return slow;
    }
}