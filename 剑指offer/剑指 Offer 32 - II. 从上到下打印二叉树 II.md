# 剑指 Offer 32 - II. 从上到下打印二叉树 II
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 

提示：

节点总数 <= 1000
注意：本题与主站 102 题相同：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

# 解题
**解题1**
队列中与node一起推入level的来计数层次
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
        if (res[level]) res[level].push(node.val)
        else res[level] = [node.val]
        if (node.left) queue.push([node.left, level + 1])
        if (node.right) queue.push([node.right, level + 1])
    }
    return res
};
```


**解题2**
每次循环时，先把当前层次长度的node推完，再开始下个层次循环
```js

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    let queue = [root]
    let res = []
    while(queue.length) {
        let tmp = [], size = queue.length
        for(let i = 0; i < size; i++) {
            let node = queue.shift()
            tmp.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        } 
        res.push(tmp)
    }
    return res
};
```


**解题3**
递归
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
            res[level].push(node.val)
        }
        if (node.left) dfs(node.left, arr, level+1) 
        if (node.right) dfs(node.right, arr, level+1) 
    }
};
```