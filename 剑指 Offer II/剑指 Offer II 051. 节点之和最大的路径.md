# 剑指 Offer II 051. 节点之和最大的路径

路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给定一个二叉树的根节点 root ，返回其 最大路径和，即所有路径上节点值之和的最大值。

 

示例 1：

![exx1.jpg](https://pic.leetcode-cn.com/1637845008-jmBgns-exx1.jpg)


```
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
```
示例 2：

![exx2.jpg](https://pic.leetcode-cn.com/1637845018-tlDZFx-exx2.jpg)


```
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
```

提示：
```
树中节点数目范围是 [1, 3 * 104]
-1000 <= Node.val <= 1000
```

注意：本题与主站 124 题相同： https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/


# 解题
1. dfs方法返回当前节点的路径和最大值
   1. 递归遍历左节点数，拿到左节点路径和最大值，
   2. 如果是负数，那么路径和最大值为0，`left = Math.max(0, dfs(node.left))`
   3. 同理，`right = Math.max(0, dfs(node.right))`
   4. 更新res结果值，`res = Math.max(left+right+node.val, res)`
   5. dfs方法返回当前节点的路径和最大值，`node.val + Math.max(left, right)`
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
var maxPathSum = function(root) {
    let res = -Infinity
    dfs(root)
    return res

    function dfs(node) {
        if (!node) return 0
        let left = Math.max(0, dfs(node.left))
        let right = Math.max(0, dfs(node.right))
        res = Math.max(left+right+node.val, res)
        return node.val + Math.max(left, right)
    }
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)