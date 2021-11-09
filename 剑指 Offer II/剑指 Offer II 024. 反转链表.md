# 剑指 Offer II 024. 反转链表

给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。

 

示例 1：

![rev1ex1](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg){:width="302" align="left"}


```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```
示例 2：

![rev1ex2](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg){:width="102" align="left"}

```
输入：head = [1,2]
输出：[2,1]
```
示例 3：
```
输入：head = []
输出：[]
```

提示：
```
链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
```

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

 

注意：本题与主站 206 题相同： https://leetcode-cn.com/problems/reverse-linked-list/

# 解题

## 解题1
遍历链表，并将当前节点p的指向前一个节点pre
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let p = head, pre = null
    while(p) {
        let tmp = p.next
        p.next = pre
        pre = p
        p = tmp
    }
    return pre
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)

## 解题2

1. n1->...->ni->ni+1<-...<-nk
2. head指向ni的时候
3. head.next.next = head 改变了ni+1的next指向， 
4. 并将head的next指向设为null，变成如下：
   1. n1->...->ni<-ni+1<-...<-nk

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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head
    let newNode = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newNode
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)
