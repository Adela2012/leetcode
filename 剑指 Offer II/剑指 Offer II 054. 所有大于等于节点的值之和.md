# 剑指 Offer II 054. 所有大于等于节点的值之和

给定一个二叉搜索树，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。

 

提醒一下，二叉搜索树满足下列约束条件：

- 节点的左子树仅包含键 小于 节点键的节点。
- 节点的右子树仅包含键 大于 节点键的节点。
- 左右子树也必须是二叉搜索树。
 

示例 1：

![tree](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/05/03/tree.png){:height="364" width="534"}

```
输入：root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```
示例 2：
```
输入：root = [0,null,1]
输出：[1,null,1]
```
示例 3：
```
输入：root = [1,0,2]
输出：[3,3,2]
```
示例 4：
```
输入：root = [3,2,4,1]
输出：[7,9,4,10]
```
 

提示：

- 树中的节点数介于 0 和 104 之间。
- 每个节点的值介于 -104 和 104 之间。
- 树中的所有值 互不相同 。
- 给定的树为二叉搜索树。
 

注意：

本题与主站 538 题相同： https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
本题与主站 1038 题相同：https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/

# 解题
1. 题：二叉搜索树的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。
2. 可知从反序中序遍历（右中左）的遍历方式，可得大于或者等于该节点值的节点顺序。
3. 使用carry变量，记录上一次的节点值之和，在深度优先遍历时，当前节点加上该值，就可。
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
var convertBST = function(root) {
    let carry = 0
    dfs(root)
    return root
    function dfs(node) {
        if (!node) return
        dfs(node.right)
        node.val += carry
        carry = node.val
        dfs(node.left)
    }
};
```