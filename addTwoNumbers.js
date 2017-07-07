/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode(0);
    var p = l1, q = l2, v = l3;
    var carry = 0, x, y, sum;
    while(p != null || q != null) {
        x = (p != null) ? p.val : 0;        
        y = (q != null) ? q.val : 0; 
        sum = x + y + carry;
        carry = parseInt(sum / 10);
        v.next = new ListNode(sum % 10);
        v = v.next;
        if (p != null) p = p.next;        
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        v.next = new ListNode(carry);
    }
    return l3.next;
};
