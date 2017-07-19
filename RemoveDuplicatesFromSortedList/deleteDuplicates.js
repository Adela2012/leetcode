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
var deleteDuplicates = function(head) {
    var listnode = new ListNode();
    var list = listnode;
    while(head){
        if(head.val != list.val) {
            list.next = head;
            list = list.next;  
        } else{  
            list.next = null;
        }
        head = head.next;
    }
    return listnode.next;
};