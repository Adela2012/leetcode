# 剑指 Offer 22. 链表中倒数第k个节点
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 2 个节点是值为 4 的节点。

 

示例：

给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.

# 解题
因为链表的节点只能从上一个节点到下一个节点，并不能直接获得有几个节点。题目要求倒数第k个节点，必须遍历一遍链表知道一共有几个节点。
## 解题1
1. 在遍历节点的时候，使用额外空间arr来存储，当前节点和它的位置。
2. 时间复杂度为O(N)，空间复杂度为O(N)，采用了额外的空间arr
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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
     let arr = [], p = head
    while(p) {
        arr.push(p)
        p = p.next
    }
    return arr[arr.length - k]
};
```
- 时间复杂度为O(N)
- 空间复杂度为O(N)

## 解题2
1. 两次遍历，
2. 第一次遍历节点的时候，记录链表长度count；遍历完，就可以通过倒数k，推出顺序的数值
3. 第二次从头开始遍历，就可以通过顺序的数值，获得节点
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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let p = head, count = 0
    while(p) {
        count++
        p = p.next
    }
    count = count - k
    p = head
    while(p && count) {
        count--
        p = p.next
    }
    return p
};
```

- 时间复杂度为O(N)
- 空间复杂度为O(1)


## 解题3
1. 快慢指针
2. 定义两个指针，快指针fast，慢指针slow，
3. 快指针先走k步，然后快慢指针一起走，
4. 等快指针走到头了，慢指针指向的就是倒数k的节点
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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let fast = head, slow = head
    while(k--) {
        fast = fast.next
    }
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
};
```
- 时间复杂度为O(N)
- 空间复杂度为O(1)
