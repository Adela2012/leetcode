# 剑指 Offer 55 - I. 二叉树的深度

剑指 Offer 55 - I. 二叉树的深度
输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，
```
    3
   / \
  9  20
    /  \
   15   7
```
返回它的最大深度 3 。

 

提示：

节点总数 <= 10000
注意：本题与主站 104 题相同：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

# 解题
算最大层数，不用管哪种遍历方式，只要记录层数就行

**解题1**
深度优先遍历，从下到上开始计算层数
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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
```
**解题2**
深度优先遍历，从上到下开始计算层数
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
 * @return {number}
 */
var maxDepth = function(root) {
    let res = 0
    function dfs(node, level) {
        if (node == null) return 
        if (level > res) res = level 
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
    dfs(root, 1)
    return res
};
```


**解题3**
广度优先遍历，从上到下计算层级
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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) return 0
    let queue = [root], res = 0
    while(queue.length) {
        let size = queue.length
        while(size--) {
            let node = queue.shift()
            if (node.left)  queue.push(node.left)  
            if (node.right) queue.push(node.right)  
        }
        res++
    }
    return res
};
```