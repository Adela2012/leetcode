# 剑指 Offer 68 - II. 二叉树的最近公共祖先
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]


<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/15/binarytree.png" alt="" />
 

示例 1:
```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
```
示例 2:
```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
```

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。
注意：本题与主站 236 题相同：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/


# 解题
**解法1**

- 深度优先遍历
- isLeft代表左树中有q或p，isRight代表右树中有q或p，isNode代表此节点中有q或p
- 当左中右树中其中两个为真，则该节点为所求值公共祖先节点

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
    let res = root
    function dfs(node) {
        if (node == null) return false
        let isLeft = dfs(node.left)
        let isRight = dfs(node.right)
        let isNode = node.val == p.val || node.val == q.val
        if ((isLeft && isRight) || (isNode && isLeft) || (isNode && isRight)) res = node
        return isNode || isLeft || isRight
    }
    dfs(root)
    return res
};
```

**解法2**
- 深度优先遍历
- 使用parent记录每个节点的父节点
- 从p开始向上查找，用visited记录路径
- 从q向上查找，如果该节点在visited记录中，则此节点为所求值公共祖先节点
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
    let parent = new Map()
    let visited = new Set()
    dfs(root)
    while(p) {
        visited.add(p.val)
        p = parent.get(p.val)
    }
    while(q) {
        if (visited.has(q.val)) {
            return q
        }
        q = parent.get(q.val)
    }
    return null

    function dfs(node) {
        if (node.left) {
            parent.set(node.left.val, node)
            dfs(node.left)
        }
        if (node.right) {
            parent.set(node.right.val, node)
            dfs(node.right)
        }
    }
};
```
