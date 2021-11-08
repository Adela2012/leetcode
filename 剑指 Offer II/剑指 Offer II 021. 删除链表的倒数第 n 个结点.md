# 剑指 Offer II 021. 删除链表的倒数第 n 个结点
给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 

示例 1：

![remove_ex1](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg){:width="542" height="222"}

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```
示例 2：
```
输入：head = [1], n = 1
输出：[]
```
示例 3：
```
输入：head = [1,2], n = 1
输出：[1]
```

提示：
```
链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
```

进阶：能尝试使用一趟扫描实现吗？

 

注意：本题与主站 19 题相同： https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

# 解题
1. 快慢指针，定义两个指针，快指针fast，慢指针slow，
3. 快指针先走n步，
4. 如果快指针指向null，说明链表已经被走完了，要删除的是头结点，因此直接返回 head.next
5. 然后快慢指针一起走，
6. 等快指针走到最后一个节点了，慢指针指向的就是倒数n的节点的前一个节点
7. 将慢指针的next指向改变成next.next就行
8. 最后返回head
   
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    while(n-- > 0) {
        fast = fast.next
    }
    if (fast == null) return head.next
    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};
```
- 时间复杂度为O(N)
- 空间复杂度为O(1)