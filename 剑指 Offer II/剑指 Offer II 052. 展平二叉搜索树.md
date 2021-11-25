# 剑指 Offer II 052. 展平二叉搜索树

给你一棵二叉搜索树，请 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

 

示例 1：

![ex1.jpg](https://pic.leetcode-cn.com/1637805080-TwopXK-ex1.jpg)

```
输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
```
示例 2：

![ex2.jpg](https://pic.leetcode-cn.com/1637805090-QYfBXG-ex2.jpg)

```
输入：root = [5,1,7]
输出：[1,null,5,null,7]
```

提示：
```
树中节点数的取值范围是 [1, 100]
0 <= Node.val <= 1000
```

注意：本题与主站 897 题相同： https://leetcode-cn.com/problems/increasing-order-search-tree/

# 解题
1. 中序遍历的时候，同时改变节点的指针方向。
2. p指针指向当前node的前一个节点，因此 p.right = node
3. 改变当前节点的左指向，node.left = null
4. 将当前节点赋值给p，用于下一个递归，p = node
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
var increasingBST = function(root) {
    const head = new TreeNode(-1)
    let p = head
    inorder(root)
    return head.right

    function inorder(node) {
        if(!node) return 
        inorder(node.left)

        p.right = node
        node.left = null
        p = node

        inorder(node.right)
    }
};
```
- 时间复杂度O(N)，N 是二叉树的节点个数
- 空间复杂度O(N)，取决于递归调用的栈空间，递归栈的深度等于二叉树的高度。