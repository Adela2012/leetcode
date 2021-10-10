# 剑指 Offer 28. 对称的二叉树
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
```
    1
   / \
  2   2
   \   \
   3    3
```

 

示例 1：
```
输入：root = [1,2,2,3,4,4,3]
输出：true
```
示例 2：
```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

限制：
```
0 <= 节点个数 <= 1000
```
注意：本题与主站 101 题相同：https://leetcode-cn.com/problems/symmetric-tree/

# 解题
深度优先遍历
1. 首先判断根节点是否为空，为空直接返回true
2. dfs递归比较两个子树是否相等
   1. 首先比较根节点的左右子树是否相等
   2. 在递归方法中，
      1. 如果两个节点都为空，则返回true
      2. 如果两个节点只有一个为空，或者两个节点的val不相等，则返回false
      3. dfs递归比较节点1的左子树和节点2的右子树，以及节点1的右子树和节点2的左子树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root == null) return true
    return dfs(root.left, root.right)

    function dfs(left, right){
        if(left == null && right == null) return true
        if(left == null || right == null || left.val != right.val) return false
        return dfs(left.left, right.right) && dfs(left.right, right.left)
    }

};
```
- 时间复杂度 O(N)
- 空间复杂度 O(N)