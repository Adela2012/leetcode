# 剑指 Offer 35. 复杂链表的复制
请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

 

**示例 1：**

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e1.png" alt="">
```
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```

**示例 2：**

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e2.png" alt="">

```
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
```

**示例 3：**

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e3.png" alt="">

```
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
```

**示例 4：**

```
输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。
```

**提示：**

-10000 <= Node.val <= 10000
Node.random 为空（null）或指向链表中的节点。
节点数目不超过 1000 。
 

注意：本题与主站 138 题相同：https://leetcode-cn.com/problems/copy-list-with-random-pointer/


# 解题

## 方法1
深度优先遍历
```js
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map()
    function dfs(node) {
        if (node == null) return null
        if (map.has(node)) return map.get(node)
        
        let newNode = new Node(node.val, null, null)
        map.set(node, newNode)

        newNode.next = dfs(node.next)
        newNode.random = dfs(node.random)
        return newNode
    }

    return dfs(head)
};
```


## 方法2
广度优先遍历
```js
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head == null) return null
    const map = new Map()
    let newHead = new Node(head.val, null, null) 
    let queue = [head]
    map.set(head, newHead)
    while(queue.length) {
        let cur = queue.pop()
        let next = cur.next, random = cur.random
        if (next !== null && !map.has(next)) {
            let newNext = new Node(next.val, null, null) 
            map.set(next, newNext)
            queue.push(next)
        }
        if (random !== null && !map.has(random)) {
            let newRandom = new Node(random.val, null, null) 
            map.set(random, newRandom)
            queue.push(random)
        }
        let newCur = map.get(cur)
        newCur.next = map.get(next) || null
        newCur.random = map.get(random) || null
    }
    return newHead
};
```

## 方法3
迭代1
```js
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head == null) return null
    const map =  new Map()
    let p = head
    let newP = new Node(p.val, null, null)
    map.set(head, newP)

    function getNode(node) {
        if (node == null) return null
        if (map.has(node)) {
            return map.get(node)
        } else {
            let newNode = new Node(node.val, null, null)
            map.set(node, newNode)
            return newNode
        }
    }
    while(p !== null) {
        newP.next = getNode(p.next)
        newP.random = getNode(p.random)

        p = p.next
        newP = newP.next
    }

    return map.get(head)
};
```

## 方法4
迭代2
```js
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head == null) return null
    let p = head
    while(p !== null) {
        let newNode = new Node(p.val, null, null) 
        newNode.next = p.next
        p.next = newNode
        p = newNode.next
    }

    p = head
    while(p !== null) {
        p.next.random = p.random == null ? null : p.random.next
        p = p.next.next
    }

    p = head
    let res = head.next, newP = p.next
    while(p !== null) {
        p.next = p.next.next
        newP.next = newP.next == null ? null : newP.next.next
        p = p.next
        newP = newP.next
    }
    return res
};
```