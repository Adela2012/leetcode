# 剑指 Offer 27. 二叉树的镜像
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 

示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
 

限制：

0 <= 节点个数 <= 1000

注意：本题与主站 226 题相同：https://leetcode-cn.com/problems/invert-binary-tree/

# 解题
**解题1**
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
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if (root == null) return null
    let newNode = new TreeNode(root.val)
    if (root.left) newNode.right = mirrorTree(root.left)
    if (root.right) newNode.left = mirrorTree(root.right)
    return newNode
};
```

**解题2**
```js
var mirrorTree = function(root) {
    if (root == null) return null
    let tmp = root.left
    root.left = root.right
    root.right = tmp
    mirrorTree(root.left)
    mirrorTree(root.right)
    return root
};
```
**解题3**

```js
var mirrorTree = function(root) {
    if (root == null) return null
    let queue = [root]
    while(queue.length) {
        let node = queue.shift()
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
        let tmp = node.left
        node.left = node.right
        node.right = tmp
    }
    return root    
};
```