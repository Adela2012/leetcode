# 剑指 Offer 07. 重建二叉树
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

例如，给出

```
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
```

返回如下的二叉树：

```
    3
   / \
  9  20
    /  \
   15   7
```

限制：

```
0 <= 节点个数 <= 5000
```
 

注意：本题与主站 105 题重复：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/


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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length == 0) return null
    let node = new TreeNode(preorder[0])
    let nodeIndex = inorder.findIndex(i => i == preorder[0])
    node.left = buildTree(preorder.slice(1, nodeIndex+1), inorder.slice(0, nodeIndex))
    node.right = buildTree(preorder.slice(nodeIndex + 1), inorder.slice(nodeIndex+1))
    return node
};
```

**解题2**

解题2通过下标的方式定位，可减少执行时间和内存消耗

```js
var buildTree = function(preorder, inorder) {
  return make(0 , 0, inorder.length - 1)
  
  function make(preStart, inStart, inEnd) {
      if (preStart > preorder.length - 1 || inStart > inEnd) return null
      let root = new TreeNode(preorder[preStart])
      
      let inIndex = 0
      for (let i = inStart; i <= inEnd; i++) {
          if (inorder[i] == root.val) inIndex = i
      }
      root.left = make(preStart + 1, inStart, inIndex - 1)
      root.right = make(preStart + inIndex - inStart + 1, inIndex + 1, inEnd)
      return root
  }
};
```