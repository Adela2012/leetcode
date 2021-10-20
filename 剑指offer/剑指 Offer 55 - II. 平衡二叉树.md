# 剑指 Offer 55 - II. 平衡二叉树

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

 

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

```
    3
   / \
  9  20
    /  \
   15   7
```

返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

返回 false 。

 

限制：

0 <= 树的结点个数 <= 10000
注意：本题与主站 110 题相同：https://leetcode-cn.com/problems/balanced-binary-tree/

# 解题
**解题1**
自下到上
1. getDepth获取深度，
2. 同时判断左右子树的深度差相差是否超过1，
3. 如果不超过，返回当前树的最大值，
4. 否则返回-1
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
var isBalanced = function(root) {
    function getDepth(node) {
        if (node == null) return 0
        let left = getDepth(node.left)
        let right = getDepth(node.right)
        if (left != -1 && right != -1) {
            return Math.abs(left - right) <= 1 ? Math.max(left, right)+1 : -1
        }
        return -1
    }
    return getDepth(root) != -1
     
};
```
- 时间复杂度 O(N)
- 空间复杂度 O(N)

**解题2**
自上到下
1. 首先getDepth为获取node的最大深度
2. 比较root的左子树和右子树的最大深度的绝对值不超过1
3. root的左子树也是平衡树
4. root的右子树也是平衡树

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
var isBalanced = function(root) {
    if (!root) return true
    return Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
    
    function getDepth(node) {
        if (!node) return 0
        return Math.max(getDepth(node.left), getDepth(node.right)) + 1
    };
};

```
- 时间复杂度 O(NlogN)
- 空间复杂度 O(N)
