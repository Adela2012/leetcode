# 剑指 Offer II 077. 链表排序
给定链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

 

示例 1：
```
输入：head = [4,2,1,3]
输出：[1,2,3,4]
```

示例 2：
```
输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
```

示例 3：
```
输入：head = []
输出：[]
```

提示：
```
链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105
```

进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

 

注意：本题与主站 148 题相同：https://leetcode-cn.com/problems/sort-list/

# 解题
## 解题1
原地替换
1. 将链表转化成数组，
2. 数组从小到大排序后，
3. 再将链表的值逐个进行替换。
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
var sortList = function(head) {
    let arr = [], p = head
    while (p != null) {
        arr.push(p.val)
        p = p.next
    }
    p = head
    arr.sort((a,b) => a - b)
    for (let i of arr) {
        p.val = i
        p = p.next 
    }
    return head
};
```

## 解题2
自顶向下归并排序
1. splitMiddle方法采用快慢指针的方式找到中间节点并返回
2. mergeList方法将两个已排序的链表从小到大排序成一个链表并返回
3. sortList方法不断对自身进行递归，将一个链表拆分两个，直至一个节点，并不断两两排序
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
var sortList = function(head) {
    if(head == null || head.next == null) return head

    const tail = splitMiddle(head)
    const newHead = sortList(head)
    const newTail = sortList(tail)
    return mergeList(newHead, newTail)
};

function mergeList(l1, l2) {
    const dummyHead = new ListNode()
    let p = dummyHead, p1 = l1, p2 = l2
    while(p1 && p2) {
        if (p1.val < p2.val) {
            p.next = p1
            p1 = p1.next
        } else {
            p.next = p2
            p2 = p2.next
        }
        p = p.next
    }
    p.next = p1 ? p1 : p2
    return dummyHead.next
}

function splitMiddle(head) {
    let fast = head, low = head
    while(fast && fast.next) {
       fast = fast.next.next
       if (fast == null) break
       low = low.next
    }
    let tail = low.next
    low.next = null
    return tail
}
```
- 时间复杂度：O(NlogN)
- 空间复杂度：O(logN)