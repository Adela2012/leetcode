# 114. Flatten Binary Tree to Linked List
Medium

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6


## 使用stack
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let stack = []
  function rec (node) {
      if (node == null) return
      if (node.right) stack.push(node.right)
      node.right = node.left
      node.left = null
      if (!node.right) node.right = stack.pop()
      rec(node.right)
  }
  rec(root)
};
```
1. 定义一个空数组stack
1. 如果当前节点有右子树，将右子树放入stack
1. 将左子树转到跟节点的右侧，并将当前节点的左侧置空
1. 如果没有右子树，当前节点的，将stack中的右子树们，按照先进后出的次序，挂到当前节点的右侧。
1. 对于当前右子树，重复上3步骤

## post order 后序
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let pre = null
  function rec (node) {
       if (node == null) return
      rec(node.right)
      rec(node.left)
      node.right = pre
      node.left = null
      pre = node
  }
   rec(root)
};
```
1. 定义一个临时节点pre
1. 从下到上，从右往左，遍历
1. 将当前节点的右子树赋值pre
1. 将当前节点的左子树置空null
1. 将pre赋值为当前节点