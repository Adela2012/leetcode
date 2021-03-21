/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (!head) return null
    let p = head
    while (p) {
        let newNode = new Node(p.val, null, null)
        newNode.next = p.next
        p.next = newNode
        p = newNode.next
    }
    
    p = head
    while(p && p.next) {
        p.next.random = p.random == null ?  null : p.random.next
        p = p.next.next
    }
    
    p = head
    let res = p.next, q = res
    while(p) {
        p.next = p.next.next
        q.next  = q.next == null ? null : q.next.next
        p = p.next
        q = q.next
    }
    return res
};