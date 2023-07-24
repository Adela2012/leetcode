# 二叉树

如图所示，二叉树的遍历方式有深度优先DFS的三种方式，后序、前序、中序，还有广度优先BFS遍历方式。

<img src="https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/Figures/1457/dfs.png">

<br>

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
```

### 1. 先序遍历
使用栈，将后出的右树先压入栈，再将左树压入栈
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    let stack = [root]
    let res = []
    while(stack.length) {
        let node = stack.pop()
        res.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    return res
};
```

### 2. 中序遍历

### 3. 中序遍历
### 4. 广度遍历
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    let queue = [root]
    let res = []
    while(queue.length) {
        let node = queue.shift()
        res.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return res
};
```





## 题
### 3. 中序遍历 原题 [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

【题目】

```
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
```

这道题是说，定义一个二叉查找树为左子树的值全部小于根值，右子树的值全部大于根值。

【举例】

```

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

【思路】

这道题可以使用**中序遍历**的方式进行求解，首先设定一个最小值`inorder`，每次遍历，把最小值设为前一次遍历结果的根路径，如果当前遍历根值比前一次遍历根值小，那么就返回false。

- Time: O(n) 
- Space: O(1) 

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let queue = []
    let inorder = -Number.MAX_VALUE
    
    while (queue.length || root != null) {
        while (root != null) {
            queue.push(root)
            root = root.left
        }
        root = queue.pop()
        
        if (root.val <= inorder) return false
        inorder = root.val
        root = root.right
    }
    return true
};
```


<br>




