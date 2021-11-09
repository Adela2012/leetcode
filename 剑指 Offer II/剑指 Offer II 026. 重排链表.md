# 剑指 Offer II 026. 重排链表

给定一个单链表 L 的头节点 head ，单链表 L 表示为：

 L0 → L1 → … → Ln-1 → Ln 
请将其重新排列后变为：

L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例 1:

![image1](https://pic.leetcode-cn.com/1626420311-PkUiGI-image.png){:width="240"}

```
输入: head = [1,2,3,4]
输出: [1,4,2,3]
```
示例 2:

![image2](https://pic.leetcode-cn.com/1626420320-YUiulT-image.png){:width="320"}

```
输入: head = [1,2,3,4,5]
输出: [1,5,2,4,3]
```

提示：
```
链表的长度范围为 [1, 5 * 104]
1 <= node.val <= 1000
```

注意：本题与主站 143 题相同：https://leetcode-cn.com/problems/reorder-list/ 

# 解题
## 解题1
1. 使用额外空间数组arr，用于存储每个链表节点
2. 改变arr数组的头尾节点的next指针指向，直至i,j节点相遇
3. 改变最后节点arr[i]的节点next指向，设为null
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let arr = [], p = head
    while(p) {
        arr.push(p)
        p = p.next
    }
    let i = 0, j = arr.length - 1
    while(i < j) {
        arr[i].next = arr[j]
        i++
        if(i == j) break
        arr[j].next= arr[i]
        j--
    }
    arr[i].next = null
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)

# 解题2
寻找链表中点 + 链表逆序 + 合并链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) return null
    let [left, right] = findMiddle(head)
    let newRight = reverseList(right)
    mergeList(left, newRight)

    function mergeList(l1, l2) {
        let p1 , p2
        while(l1 && l2) {
            p1 = l1.next
            p2 = l2.next
            
            l1.next = l2
            l1 = p1

            l2.next = l1
            l2 = p2
        }
    }
    
    function findMiddle(head) {
        let fast = head, slow = head
        while(fast && fast.next) {
            fast = fast.next.next
            if (!fast) break
            slow = slow.next
        }
        let p = slow.next
        slow.next = null
        return [head, p]
    }

    function reverseList(head) {
        let p = head, pre = null
        while(p) {
            let tmp = p.next
            p.next = pre
            pre = p
            p = tmp
        }
        return pre
    };
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)
