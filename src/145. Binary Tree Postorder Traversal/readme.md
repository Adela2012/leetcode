145. Binary Tree Postorder Traversal
Medium

Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

Example 1:

```
Input: root = [1,null,2,3]
Output: [3,2,1]
```
Example 2:
```
Input: root = []
Output: []
```
Example 3:
```
Input: root = [1]
Output: [1]
```
Example 4:

```
Input: root = [1,2]
Output: [2,1]
```
Example 5:

```
Input: root = [1,null,2]
Output: [2,1]
 ```

Constraints:
```
The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
```


## 解题1
采用深度优先遍历的方法
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let arr = []
    function dsf(node) {
        if(!node) return 
        dsf(node.left)
        dsf(node.right)
        arr.push(node.val) 
    }
    
    dsf(root)
    return arr
    
};
```

## 解题2
使用栈的方式
