# 剑指 Offer 26. 树的子结构
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:
```
     3
    / \
   4   5
  / \
 1   2
```
给定的树 B：
```
   4 
  /
 1
```
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：
```
输入：A = [1,2,3], B = [3,1]
输出：false
```
示例 2：
```
输入：A = [3,4,5,1,2], B = [4,1]
输出：true
```
限制：
```
0 <= 节点个数 <= 10000
```


# 解题
1. isPart：判断B是否是以A为根节点开始匹配的一部分
   1. 如果B为空，返回true
   2. 如果A为空或A的值不等于B的值，返回false
   3. 继续深入比较AB的左子树和右子树
2. isSubStructure：判断B是不是A的子结构
   1. 如果AB任一为空，则返回false
   2. 有三种可能性：isPart(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if (A == null || B == null) return false
    return isPart(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

function isPart(A, B) {
    if (B == null) return true
    if (A == null || A.val != B.val) return false
    return isPart(A.left, B.left) && isPart(A.right, B.right)
}
```
- 时间复杂度 O(MN)，其中 M,N 分别为树 A 和 树 B 的节点数量
- 空间复杂度 O(M)