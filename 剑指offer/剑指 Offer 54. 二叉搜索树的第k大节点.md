# 剑指 Offer 54. 二叉搜索树的第k大节点
给定一棵二叉搜索树，请找出其中第k大的节点。

 

示例 1:
```
输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
```
示例 2:
```
输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
 ```

限制：
```
1 ≤ k ≤ 二叉搜索树元素个数
```

# 解题
二叉搜索树的节点的 右树值 > 节点值 > 左树值，因此只需要做一个深度优先遍历，顺序就是右->中->左就行
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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let res = root.val
    function dfs(node) {
        if (node == null) return
        if (node.right) dfs(node.right)
        if (--k == 0) res = node.val
        else if (node.left) dfs(node.left) // 避免获得目标值以后继续递归
    }
    dfs(root)
    return res
};
```