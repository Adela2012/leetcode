# 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]


![logo](https://pic.leetcode-cn.com/1627997023-aoYRNR-file_1627997022284){:width="0" height="0" align="left"}
![binarysearchtree_improved](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/binarysearchtree_improved.png){:width="0" height="0" align="left"}
 

示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
注意：本题与主站 235 题相同：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/


# 解题
二叉搜索树的节点的 右树值 > 节点值 > 左树值
- 如果q和p的值都比root值小，说明目标在左树上
- 如果q和p的值都比root值大，说明目标在右树上
- 如果root值在q和p值的中间，说明root值为最近公共祖先
- 写法1通过两者差值是否为0和负数，来判断root值在q和p值的中间
**写法1**
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return (root.val - p.val)*(root.val - q.val) < 1 ? root : lowestCommonAncestor(root.val > p.val ? root.left : root.right, p, q)
};
```
**写法2**
```js
var lowestCommonAncestor = function (root, p, q) {
  if (q.val < root.val && p.val < root.val) return lowestCommonAncestor(root.left, p, q)
  if (q.val > root.val && p.val > root.val) return lowestCommonAncestor(root.right, p, q)
  return root
};
```