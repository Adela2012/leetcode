# 剑指 Offer 32 - III. 从上到下打印二叉树 III
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```
[
  [3],
  [20,9],
  [15,7]
]
```

提示：

节点总数 <= 1000

# 解题

**解题1**
通过队列先进先出的特点实现层级遍历。
1. root根节点为空时，直接返回空数组[]。
2. 初始化时，队列推入根节点和层级[root, 0]
3. 当queue队列不为空时，将队首节点[node, level]出队。
4. 数组判断level下标是否存在，
   1. 若不存在，初始化新数组
   2. 若存在，判断level % 2 == 0，如果是偶数，push入数组，如果是奇数，unshift入数组。
5. 依次将node.left和当前层级，node.right和当前层级，入队。
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    let queue = [[root, 0]]
    let res = []
    while(queue.length) {
        let [node, level] = queue.shift()
        if (res[level]) level % 2 == 0 ? res[level].push(node.val) : res[level].unshift(node.val)
        else res[level] = [node.val]
        if (node.left) queue.push([node.left, level + 1])
        if (node.right) queue.push([node.right, level + 1])
    }
    return res
};
```

- 时间复杂度 O(N)
- 空间复杂度 O(N)

**解题2**
每次循环时，先把当前层次长度的node推完，再开始下个层次循环。
并采用遍历flag，来判断采用从左到右，还是从右到左。
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    let queue = [root]
    let res = [], flag = false
    while(queue.length) {
        flag = !flag
        let tmp = [], size = queue.length
        for(let i = 0; i < size; i++) {
            let node = queue.shift()
            flag ? tmp.push(node.val) : tmp.unshift(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        } 
        res.push(tmp)
    }
    return res
};
```

**解题3**
递归，实现深度优先遍历。
需判断level % 2 == 0，如果是偶数，push入数组，如果是奇数，unshift入数组
```js

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    dfs(root, res, 0)
    return res

    function dfs(node, arr, level) {
        if (node == null) return 
        if (!res[level]) {
            res[level] = [node.val]
        }
        else {
            level % 2 == 0 ? res[level].push(node.val) : res[level].unshift(node.val)
        }
        if (node.left) dfs(node.left, arr, level+1) 
        if (node.right) dfs(node.right, arr, level+1) 
    }
};
```