# 剑指 Offer II 050. 向下的路径节点之和
给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

 

示例 1：

![pathsum3-1-tree.jpg](https://pic.leetcode-cn.com/1638174341-thKKVO-pathsum3-1-tree.jpg)

```
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
```

示例 2：

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3
```
 

提示:
```
二叉树的节点个数的范围是 [0,1000]
-109 <= Node.val <= 109 
-1000 <= targetSum <= 1000 
```

注意：本题与主站 437 题相同：https://leetcode-cn.com/problems/path-sum-iii/

# 解题
1. 定位某个节点，为路径开始。
2. h方法求得该节点的路径之和，
   1. total为前面节点之和，加上该节点值以后的和，与sum做比较，
   2. 如果相等，说明找到一条路径，再与左右递归的值相加。
3. pathSum 中继续递归该节点的左子树和右子树。
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) return 0
    return h(root, 0, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)  
};
function h(node, pre, sum) {
    if(!node) return 0
    let total = pre + node.val
    return (total == sum ? 1 : 0) + h(node.left, total, sum) + h(node.right, total, sum)
}
```
- 时间复杂度O(N^2)
- 空间复杂度O(N)