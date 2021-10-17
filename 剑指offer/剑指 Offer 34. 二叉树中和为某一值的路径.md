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
1. 深度优先搜索，从头记录节点路径
2. 每次dfs时，入参当前节点二叉树，剩余的整数，当前节点路径数组
3. 当节点的没有左右子节点，且num == node.val时，说明找到了该条路径
4. 最后返回res数组
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
1. 深度优先搜索，相对方法1，使用stack数组记录节点路径
2. 使用一个栈stack记录每次遍历路径节点的值，如果子树都遍历完了，就从栈中推出该节点。
3. 当节点的没有左右子节点，且num == 0时，将栈stack记录的值推入arr数组中
4. 最后返回arr数组
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    let arr = []
    let stack = []
    dfs(root, target)
    return arr

    function dfs(node, num) {
        if (!node) return
        num -= node.val
        stack.push(node.val)
        if (!node.left && !node.right && !num) arr.push([...stack])
        dfs(node.left, num)
        dfs(node.right, num)
        stack.pop()
    }
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)