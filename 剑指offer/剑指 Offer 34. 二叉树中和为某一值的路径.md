# 剑指 Offer 34. 二叉树中和为某一值的路径

输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

 

示例:
给定如下二叉树，以及目标和 sum = 22，
```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
```
返回:
```
[
   [5,4,11,2],
   [5,8,4,5]
]
```

提示：

节点总数 <= 10000
注意：本题与主站 113 题相同：https://leetcode-cn.com/problems/path-sum-ii/


# 解题
**方法1**
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(root == null) return []
    let res = []
    dfs(root, sum, [])
    function dfs(node, num, arr) {
        if (num == node.val && !node.left && !node.right) {
            res.push([...arr, node.val])
        }
        if (node.left) dfs(node.left, num - node.val, [...arr, node.val])
        if (node.right) dfs(node.right, num - node.val, [...arr, node.val])
    }
    return res

};
```

**方法2**
方法2是方法1优化方案，使用一个栈进行每次节点的遍历，如果子树都遍历完了，就从栈中推出该节点。
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(root == null) return []
    let res = []
    let stack = []
    dfs(root, sum)


    function dfs(node, num) {
        num -= node.val
        stack.push(node.val)
        if (num == 0 && !node.left && !node.right) {
            res.push([...stack])
        }
        if (node.left) dfs(node.left, num)
        if (node.right) dfs(node.right, num)
        stack.pop()
    }
    return res

};
```
