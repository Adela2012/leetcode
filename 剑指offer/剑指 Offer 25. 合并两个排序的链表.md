# 剑指 Offer 25. 合并两个排序的链表
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：
```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```
限制：
```
0 <= 链表长度 <= 1000
```


# 解题
1. 新生成一个节点head，用于指向最后的结果返回。
2. 当l1和l2都不为null时，循环遍历比较l1.val和l2.val的大小，
3. 当l1.val比较小时，p指针指向l1，l1指向它的下一个节点
4. 同理，l2.val比较小时，或跟l1.val相等，p指针指向l2，l2指向它的下一个节点
5. p指向它的下一个节点
6. 当l1和l2其中一个遍历完了，只剩下l1或l2时，p的指向指向不为null的链表
7. 最后返回head.next
```js
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
    let head = new ListNode(0), p = head
    while(l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1
            l1 = l1.next
        } else {
            p.next = l2
            l2 = l2.next
        } 
        p = p.next
    }
    p.next = l1 == null ? l2 : l1
    return head.next
};
```
- 时间复杂度：O(M+N)
- 空间复杂度：O(1)