# 剑指 Offer 32 - I. 从上到下打印二叉树
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回：
```
[3,9,20,15,7]
``` 

提示：
```
节点总数 <= 1000
```

# 解题

**广度优先遍历**
通过队列先进先出的特点实现层级遍历。
1. root根节点为空时，直接返回空数组[]。
2. 当queue队列不为空时，将队首节点node出队。
3. 数组记录node.val，并将node.left和node.right入队。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    let queue = [root]
    let res = []
    while(queue.length) {
        let node = queue.shift()
        res.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return res
};
```
- 时间复杂度 O(N)
- 空间复杂度 O(N)