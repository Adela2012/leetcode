/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode reverseBetween(ListNode head, int m, int n) {
        if(head == null) return null;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode pre = dummy;
        for(int i = 0; i < m - 1; i++) pre = pre.next;
        ListNode list = pre.next;
        ListNode next = list.next;
        
        for(int i = 0; i < n - m; i++) {
            list.next = next.next;
            next.next = pre.next;
            pre.next = next;
            next = list.next;
        }
        
        return dummy.next;
        
    }
}