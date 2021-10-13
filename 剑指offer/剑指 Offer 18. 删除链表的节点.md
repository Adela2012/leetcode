# 剑指 Offer 18. 删除链表的节点
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

注意：此题对比原题有改动

示例 1:
```
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```
示例 2:
```
输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```
# 解题
1. 特殊情况处理：头结点的值正好为传入值head.val == val，直接返回下一个节点，head.next
2. 把某个链表节点删除，需要知道当前节点的前一个节点，并将前一个节点的指针指向后一个节点。
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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if (head.val == val) return head.next
    let p = head
    while(p && p.next && p.next.val !== val) {
        p = p.next
    }
    if (p && p.next && p.next.val == val) {
        p.next = p.next.next
    }
    return head
};
```


- 时间复杂度为O(N)
- 空间复杂度为O(1)