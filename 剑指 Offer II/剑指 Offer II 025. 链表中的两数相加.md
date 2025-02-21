# 剑指 Offer II 025. 链表中的两数相加

给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

可以假设除了数字 0 之外，这两个数字都不会以零开头。

 

示例1：


![image](https://pic.leetcode-cn.com/1626420025-fZfzMX-image.png){:width="302"}

```
输入：l1 = [7,2,4,3], l2 = [5,6,4]
输出：[7,8,0,7]
```
示例2：
```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[8,0,7]
```
示例3：
```
输入：l1 = [0], l2 = [0]
输出：[0]
```
 

提示：
```
链表的长度范围为 [1, 100]
0 <= node.val <= 9
输入数据保证链表代表的数字无前导 0
```
 

进阶：如果输入链表不能修改该如何处理？换句话说，不能对列表中的节点进行翻转。

 

注意：本题与主站 445 题相同：https://leetcode-cn.com/problems/add-two-numbers-ii/

# 解题
## 解题1
不翻转链表
1. 采用额外空间，数组arr1，arr2用来存放l1和l2链表的值
2. 调整arr1，和arr2的大小，使arr1数组为最长
3. 从数组的尾部开始计算，两数组值的和sum，如果超过10，则carry为1，node.val为sum % 10
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arr1 = [], arr2 = [], p1 = l1, p2 = l2
    while(p1) {
        arr1.push(p1.val)
        p1 = p1.next
    }
    while(p2) {
        arr2.push(p2.val)
        p2 = p2.next
    }
    if(arr1.length < arr2.length) {
        let tmp = arr1
        arr1 = arr2
        arr2 = tmp
    }
    const n1 = arr1.length, n2 = arr2.length
    let res, pre = null, carry = 0
    for (let i = n1 - 1, j = n2 - 1; i >= 0 || carry; i--,j--) {
        let sum = i < 0 ? carry : j < 0 ? arr1[i] + carry : arr1[i] + arr2[j] + carry
        carry = parseInt(sum / 10)
        sum = sum % 10
        let node = new ListNode(sum)
        
        node.next = pre
        pre = node
        if (i == 0 || i == -1) res = node
    }
    return res

};
```
- 时间复杂度O(N)
- 空间复杂度O(N)

## 解题2
翻转链表 + 链表相加
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    l1 = reverseList(l1)
    l2 = reverseList(l2)
   
   let carry = 0, pre = null
    while(l1 || l2 || carry) {
        carry += (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
        pre = new ListNode(carry % 10, pre)
        carry = parseInt(carry / 10)
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return pre

    function reverseList (head) {
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
