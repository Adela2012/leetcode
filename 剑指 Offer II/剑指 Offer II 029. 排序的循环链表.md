# 剑指 Offer II 029. 排序的循环链表
给定循环升序列表中的一个点，写一个函数向这个列表中插入一个新元素 insertVal ，使这个列表仍然是循环升序的。

给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。

如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。

如果列表为空（给定的节点是 null），需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。

 

示例 1：

![example_1_before_65p](https://assets.leetcode.com/uploads/2019/01/19/example_1_before_65p.jpg){:width="149" height="250" align="left"}


 
```
输入：head = [3,4,1], insertVal = 2
输出：[3,4,1,2]
解释：在上图中，有一个包含三个元素的循环有序列表，你获得值为 3 的节点的指针，我们需要向表中插入元素 2 。新插入的节点应该在 1 和 3 之间，插入之后，整个列表如上图所示，最后返回节点 3 。

![example_1_after_65p](https://assets.leetcode.com/uploads/2019/01/19/example_1_after_65p.jpg){:width="149" height="250" align="left"}

```

示例 2：
```
输入：head = [], insertVal = 1
输出：[1]
解释：列表为空（给定的节点是 null），创建一个循环有序列表并返回这个节点。
```
示例 3：
```
输入：head = [1], insertVal = 0
输出：[1,0]
```

提示：
```
0 <= Number of Nodes <= 5 * 10^4
-10^6 <= Node.val <= 10^6
-10^6 <= insertVal <= 10^6
```

注意：本题与主站 708 题相同： https://leetcode-cn.com/problems/insert-into-a-sorted-circular-linked-list/

# 解题
1. 特殊情况处理，如果节点为空的情况，直接插入，并改变节点next指针指向自己
   1. `head = new Node(insertVal)`
   2. `head.next = head`
2. 只有一个节点的情况，不走while循环，直接改变头结点的指向 
   1. `p.next = new Node(insertVal, p.next)`
3. 当p.next != head 时，找到三种情况
   1. 插入值是中间值 `p.val <= insertVal && p.next.val >= insertVal`
   2. 插入值是最小值 `p.val > p.next.val && p.next.val >= insertVal`
   3. 插入值是最大值 `p.val > p.next.val && p.val <= insertVal`
   4. 找到后，改变p节点的指向 `p.next = new Node(insertVal, p.next)`
```js
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if(!head) {
        head = new Node(insertVal)
        head.next = head
        return head
    }
    let p = head
    while(p.next != head) {
        let s1 = p.val <= insertVal && p.next.val >= insertVal // 插入值是中间值
        let s2 = p.val > p.next.val && p.next.val >= insertVal // 插入值是最小值
        let s3 = p.val > p.next.val && p.val <= insertVal // 插入值是最大值
        if (s1 || s2 || s3) break
        p = p.next
    }
    p.next = new Node(insertVal, p.next)
    return head
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)