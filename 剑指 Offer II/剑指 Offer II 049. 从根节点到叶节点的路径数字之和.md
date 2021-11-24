# 剑指 Offer II 049. 从根节点到叶节点的路径数字之和
给定一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。

每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。

叶节点 是指没有子节点的节点。

 

示例 1：
![num1tree.jpg](https://pic.leetcode-cn.com/1637762906-mlDCqN-num1tree.jpg)

```
输入：root = [1,2,3]
输出：25
解释：
从根到叶子节点路径 1->2 代表数字 12
从根到叶子节点路径 1->3 代表数字 13
因此，数字总和 = 12 + 13 = 25
```
示例 2：
![num2tree.jpg](https://pic.leetcode-cn.com/1637762914-TXxHmj-num2tree.jpg)

```
输入：root = [4,9,0,5,1]
输出：1026
解释：
从根到叶子节点路径 4->9->5 代表数字 495
从根到叶子节点路径 4->9->1 代表数字 491
从根到叶子节点路径 4->0 代表数字 40
因此，数字总和 = 495 + 491 + 40 = 1026
```

提示：
```
树中节点的数目在范围 [1, 1000] 内
0 <= Node.val <= 9
树的深度不超过 10
```

注意：本题与主站 129 题相同： https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/

# 解题
1. 深度优先遍历。
2. 每次递归时，将当前节点的值通过参数携带下去。
3. 当没有左节点和右节点时，说明是叶节点，更新sum值。
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
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0
    dfs(root, ''+root.val)
    return sum

    function dfs(node, str) {
        if (!node.left && !node.right) {
            sum += Number(str)
            return
        }
        if (node.left) dfs(node.left, str + node.left.val)
        if (node.right) dfs(node.right, str + node.right.val)
    }
};
```
- 时间复杂度O(N)，N 是二叉树的节点个数
- 空间复杂度O(N)，取决于递归调用的栈空间，递归栈的深度等于二叉树的高度。

**方法2**

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
 * @return {number}
 */
var sumNumbers = function(root) {
    return dfs(root, 0)

    function dfs(node, preSum) {
        if (!node) return 0
        const sum = preSum * 10 + node.val
        if (!node.left && !node.right) return sum
        return dfs(node.left, sum) + dfs(node.right, sum)
    }
};
```