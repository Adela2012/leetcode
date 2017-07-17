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
var mergeTwoLists = function(l1, l2) {
    var list = new ListNode(-1);
    var p = l1, q = l2, l = list;
    while(p != null && q !=null) {
        if (p.val < q.val) {
            l.next = p;
            p = p.next;
        } else {
            l.next = q;
            q = q.next;
        }
        l = l.next;
       
    }
     l.next = (q != null) ? q: p;
    return list.next;
};