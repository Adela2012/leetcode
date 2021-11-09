# 剑指 Offer II 022. 链表中环的入口节点

给定一个链表，返回链表开始入环的第一个节点。 从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

 

示例 1：

![circularlinkedlist](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png){:width="300" height="97"  align="left"}

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

示例 2：

![circularlinkedlist_test2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png){:width="74" height="141"  align="left"}

```
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```
示例 3：

![circularlinkedlist_test3](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png){:width="45" height="45" align="left"}

```
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

提示：
```
链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引
```

进阶：是否可以使用 O(1) 空间解决此题？

 

注意：本题与主站 142 题相同： https://leetcode-cn.com/problems/linked-list-cycle-ii/


# 解题
1. 特殊情况处理，head链表为空时，直接返回null
2. 快慢指针，第一个循环找到，快慢指针相遇的地方
3. 如果链表没有环，即fast或者fast.next为空，直接返回null
4. 第二个循环，p指针从头结点出发，slow指针从相遇点出发，它们相遇的地方就是入口结点
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
var detectCycle = function(head) {
    if (!head) return null
    let slow = head, fast = head, p = head
    while(fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast == null || fast == slow) break
    }
    if (!fast || !fast.next) return null
    while(p != slow) {
        slow = slow.next
        p = p.next
    }
    return slow
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)