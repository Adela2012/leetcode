# 剑指 Offer 37. 序列化二叉树

请实现两个函数，分别用来序列化和反序列化二叉树。

示例: 

你可以将以下二叉树：
```
    1
   / \
  2   3
     / \
    4   5
```
序列化为 "[1,2,3,null,null,4,5]"
注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

# 解题
**方法1**
广度优先遍历
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root == null) return "[]"
    let queue = [root], res = []
    while(queue.length) {
        let node = queue.shift()
        if (node != null) {
            queue.push(node.left)
            queue.push(node.right)
            res.push(node.val)
        } else {
            res.push(null)
        }
    }
    return JSON.stringify(res)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data == '[]') return null
    let arr = JSON.parse(data)
    let root = new TreeNode(arr[0])
    let queue = [root], i = 1
    while(queue.length && i < arr.length) {
        let node = queue.shift()
        if (arr[i] != null){
            node.left = new TreeNode(arr[i])
            queue.push(node.left)
        }
        i++
        if (arr[i] != null){
            node.right = new TreeNode(arr[i])
            queue.push(node.right)
        }
        i++
    }
    return root

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```

**方法1**
深度优先遍历（输出的str可以是别的顺序）
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root == null) return "[]"
    let res = []
    dfs(root)
    function dfs(node) {
        if(node) {
            res.push(node.val)
            dfs(node.left)
            dfs(node.right)
        } else {
            res.push(null)
        }
    }
    return JSON.stringify(res)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data == "[]") return null
    let arr = JSON.parse(data)
    return make()
    function make () {
        let val = arr.shift()
        if (val != null) {
            let node = new TreeNode(val)
            node.left = make()
            node.right = make()
            return node
        } else return null
    }
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```