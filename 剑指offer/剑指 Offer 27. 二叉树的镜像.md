# 剑指 Offer 27. 二叉树的镜像
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```
镜像输出：
```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```
 

示例 1：
```
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

限制：
```
0 <= 节点个数 <= 1000
```

注意：本题与主站 226 题相同：https://leetcode-cn.com/problems/invert-binary-tree/

# 解题
**解题1**
深度优先和递归的方式。
1. 当root为空时候，返回null
2. 新生成一个TreeNode节点newNode，赋值节点的val
3. newNode的左子树为root的右子树
4. newNode的右子树为root的左子树
5. 返回newNode
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
    newNode.right = mirrorTree(root.left)
    newNode.left = mirrorTree(root.right)
    return newNode
};
```
- 时间复杂度 O(N)
- 空间复杂度 O(N)

**解题2**
与解题1类似，只是不再生成一个TreeNode节点newNode，而在原来的二叉树上调换左右子树的位置。
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
- 时间复杂度 O(N)
- 空间复杂度 O(N)

**解题3**
广度优先的方法，采用队列先进先出的特性，将二叉树的每个节点都推入到队列中。
对于每个节点都调换其左右子树的位置。
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
- 时间复杂度 O(N)
- 空间复杂度 O(N)