/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode l3 = new ListNode(0);
        ListNode p = l1, q = l2, v = l3;
        int carry = 0, sum, x, y;
        while(p != null || q != null) {
            x = (p != null) ? p.val : 0;
            y = (q != null) ? q.val : 0;
            sum = carry + x + y;
            carry = sum / 10;
            v.next = new ListNode(sum % 10);
            v = v.next;
            if (p != null) p = p.next;
            if (q != null) q = q.next;
        }
        if (carry > 0) {
            v.next = new ListNode(carry);
        }
        return l3.next;
    }
}
