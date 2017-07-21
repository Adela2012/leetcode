/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head == null) return null;
    var fast = head;
    var slow = head;
    var prev = null;
    
    while(fast.next != null) {
        fast = fast.next;
        if(fast.next == null) break;
        fast = fast.next;
        prev = slow;
        slow = slow.next;
    }
    
    if(prev != null) prev.next = null;
    else head = null;
    
    var root = new TreeNode(slow.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(slow.next);
    return root;
};