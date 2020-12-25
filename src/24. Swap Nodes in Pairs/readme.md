## 两两交换链表中的节点

给定一个链表，两两交换其中相邻的节点，并两两交换链表中的节点返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。


示例 1：
```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

示例 2：
```
输入：head = []
输出：[]
```
示例 3：
```
输入：head = [1]
输出：[1]
```

提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100



## 解题思路

### 解法1

1. 这道题比较粗暴的解法就是交换+递归。
1. 首先排除额外情况。就是为空和只有一个情况。
1. 其次实现头两个的一个交换，使用变量p记录下节点2的地址，变量q记下节点3的地址。然后替换将节点1next指向p和节点2next的指向节点1。
1. 最后使用递归，将p的变量指向递归后的函数返回值。

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
var swapPairs = function(head) {
    if (head == null || head.next == null) return head
    let p = head.next, q = swapPairs(head.next.next)
    head.next = q
    p.next = head
    return p
};

```
**复杂度分析**

- 时间复杂度：O(n)，其中 n 是链表的节点数量。需要对每个节点进行更新指针的操作。
- 空间复杂度：O(n)，其中 n 是链表的节点数量。空间复杂度主要取决于递归调用的栈空间。


## 以下是官方的解法，
### 解法1 
区别在于少用了一个变量q，以及代码语义化更好。
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
var swapPairs = function(head) {
    if (head === null || head.next === null) return head
    const newHead = head.next
    head.next = swapPairs(newHead.next)
    newHead.next = head
    return newHead
};
```
### 解法2
使用一个哑节点，并通过迭代的方式，依次交换node1和node2的节点
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
var swapPairs = function(head) {
    const dummyHead = new ListNode(0)
    dummyHead.next = head
    let temp = dummyHead
    while(temp.next !== null && temp.next.next !== null) {
        let node1 = temp.next
        let node2 = temp.next.next
        
        temp.next = node2
        node1.next = node2.next
        node2.next = node1
        
        temp = node1
    }
    return dummyHead.next
};
```
**复杂度分析**

- 时间复杂度：O(n)，其中 n 是链表的节点数量。需要对每个节点进行更新指针的操作。
- 空间复杂度：O(1)。