# 剑指 Offer II 078. 合并排序链表

给定一个链表数组，每个链表都已经按升序排列。

请将所有链表合并到一个升序链表中，返回合并后的链表。

 

示例 1：
```
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```
示例 2：
```
输入：lists = []
输出：[]
```
示例 3：
```
输入：lists = [[]]
输出：[]
```

提示：
```
k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] 按 升序 排列
lists[i].length 的总和不超过 10^4
```

注意：本题与主站 23 题相同： https://leetcode-cn.com/problems/merge-k-sorted-lists/

# 解题
## 解题1
通过两两依次合并的方式
1. mergeTwoLists方法可以合并两个排序链表为一个排序链表
   1. 创造一个空节点，dummyList，指针p
   2. 比较链表l1和l2指针p1和p2的节点的val大小
   3. 将p指针的next指向val小的节点，并将改节点指向自身下一个next
   4. 第二步比较直到p1或p2为空时，跳出循环
   5. 并将p的next指向不为空的p1或p2
   6. 最后返回dummyList.next
2. mergeKLists方法
   1. 如果lists为空，返回null
   2. 第一个链表lists[0]和第二个链表lists[1]合并，得到新的res链表
   3. 再将res和lists[2]合并，得到新的res链表
   4. 依次res和lists[i]合并，得到新的res链表
   5. 最后返回res
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length == 0) return null
    let res = lists[0]
    for(let i = 1; i < lists.length; i++) {
        res = mergeTwoLists(res, lists[i])
    }
    return res

};

function mergeTwoLists(l1, l2) {
    const dummyList = new ListNode()
    let p = dummyList, p1 = l1, p2 = l2
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
    return dummyList.next
}
```
- 时间复杂度：O(NK^2)，N = lists.length，K = list[i].length
- 空间复杂度：O(1)

## 解题2
解题1是线性的合并，解题2采用分治的方式实现两两合并
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return merge(lists, 0, lists.length-1)
};

function merge(lists, l, r) {
    if (l == r) return lists[l]
    if (l > r) return null
    const mid = l + ((r - l) >> 1)
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid+1, r))
}

function mergeTwoLists(l1, l2) {
    const dummyList = new ListNode()
    let p = dummyList, p1 = l1, p2 = l2
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
    return dummyList.next
}
```
- 时间复杂度：O(NKlogK)，N = lists.length，K = list[i].length
- 空间复杂度：O(logK)

## 解题3
1. for循环lists列表，找到lists[i]中节点val最小的那个链表min和所在下标位置
2. 修改dummyList指针p的指向到min，并将lists[index]设为min.next
3. 当lists[i]都为空，及lists列表中不存在链表时，跳出循环，并返回dummyList.next
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length == 0) return null
    if (lists.length == 1) return lists[0]
    const dummyList = new ListNode()
    let p = dummyList
    while(true) {
        let min = null, flag = true, index = null
        for (let i = 0; i < lists.length; i++) {
            if (lists[i]) {
                flag = false
                if (min == null || min.val > lists[i].val) {
                    min = lists[i]
                    index = i
                }
            }
        } 
        if (index !== null) {
            p.next = min
            lists[index] =  min.next
        }
        p = p.next
        if (flag) break
    }
    return dummyList.next

};
```