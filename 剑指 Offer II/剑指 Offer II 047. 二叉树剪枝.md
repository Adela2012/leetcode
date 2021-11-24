# 剑指 Offer II 047. 二叉树剪枝
给定一个二叉树 根节点 root ，树的每个节点的值要么是 0，要么是 1。请剪除该二叉树中所有节点的值为 0 的子树。

节点 node 的子树为 node 本身，以及所有 node 的后代。

 

示例 1:
```
输入: [1,null,0,0,1]
输出: [1,null,0,null,1] 
解释: 
只有红色节点满足条件“所有不包含 1 的子树”。
右图为返回的答案。
```
![1028_2.png](https://pic.leetcode-cn.com/1637763660-DeyMuj-1028_2.png)

示例 2:
```
输入: [1,0,1,0,0,0,1]
输出: [1,null,1,null,1]
解释: 
```
![1028_1.png](https://pic.leetcode-cn.com/1637763668-YmAwiE-1028_1.png)


示例 3:
```
输入: [1,1,0,1,1,0,1,0]
输出: [1,1,0,1,1,null,1]
解释: 
```
![1028.png](https://pic.leetcode-cn.com/1637763674-vYftDn-1028.png)


 

提示:
```
二叉树的节点个数的范围是 [1,200]
二叉树节点的值只会是 0 或 1
```
 

注意：本题与主站 814 题相同：https://leetcode-cn.com/problems/binary-tree-pruning/


# 解题
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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if(!root) return null
    const left = pruneTree(root.left)
    const right = pruneTree(root.right)
    if(root.val == 0 && !left && !right) return null
    root.left = left
    root.right = right
    return root
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)