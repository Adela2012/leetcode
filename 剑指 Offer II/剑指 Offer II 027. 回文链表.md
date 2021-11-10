# 剑指 Offer II 027. 回文链表
给定一个链表的 头节点 head ，请判断其是否为回文链表。

如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。

 

示例 1：

![image](https://pic.leetcode-cn.com/1626421737-LjXceN-image.png){:align="left"}

```
输入: head = [1,2,3,3,2,1]
输出: true
```
示例 2：

![image2](https://pic.leetcode-cn.com/1626422231-wgvnWh-image.png.png){:width="138" height="62"  align="left"}
```
输入: head = [1,2]
输出: false
```

提示：
```
链表 L 的长度范围为 [1, 105]
0 <= node.val <= 9
```
 

进阶：能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

 

注意：本题与主站 234 题相同：https://leetcode-cn.com/problems/palindrome-linked-list/


# 解题
寻找链表中点 + 链表逆序 + 比较链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true
    let middle = findMiddle(head)
    middle = reverseList(middle)
    return compare(head, middle)

    function compare(l1,l2) {
        while(l1 && l2) {
            if (l1.val != l2.val) return false
            l1 = l1.next
            l2 = l2.next
        }
        return !l2 && (!l1 || !l1.next)
    }

    function findMiddle(head) {
        let slow = head, fast = head
        while(fast && fast.next) {
            fast = fast.next.next
            if(!fast) break
            slow = slow.next
        }
        let middle = slow.next
        slow.next = null
        return middle
    }

    function reverseList(head) {
        let pre = null, p = head
        while(p) {
            let tmp = p.next
            p.next = pre
            pre = p
            p = tmp
        }
        return pre
    }
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)