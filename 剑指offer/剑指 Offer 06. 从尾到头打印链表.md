# 剑指 Offer 06. 从尾到头打印链表
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]
 

限制：

0 <= 链表长度 <= 10000


# 解题
此题从头到尾遍历链接，再将不为null的节点每次从头推入数组即可实现从尾到头反过来返回每个节点的值。
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
 * @return {number[]}
 */
var reversePrint = function(head) {
    let arr = []
    let p = head
    while(p && p.val !== null) {
        arr.unshift(p.val)
        p = p.next
    }
    return arr
};
```