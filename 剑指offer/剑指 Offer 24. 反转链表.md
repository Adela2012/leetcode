# 剑指 Offer 24. 反转链表
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

 

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 

限制：

0 <= 节点个数 <= 5000

 

注意：本题与主站 206 题相同：https://leetcode-cn.com/problems/reverse-linked-list/

# 解题
1. 两个指针，记录前一个节点prev和当前节点cur。
2. 当前节点cur不为null时，先存储它的next节点指向，再将它的原来的next指向prev节点。
3. 按顺序往下推进。
```js
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
var reverseList = function(head) {
    let prev = null, cur = head
    while(cur !== null) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};
```