# 剑指 Offer II 048. 序列化与反序列化二叉树

序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

 

示例 1：

![serdeser.jpg](https://pic.leetcode-cn.com/1637674549-levCDQ-serdeser.jpg)

```
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
```
示例 2：
```
输入：root = []
输出：[]
```
示例 3：
```
输入：root = [1]
输出：[1]
```
示例 4：
```
输入：root = [1,2]
输出：[1,2]
```

提示：
```
输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，也可以采用其他的方法解决这个问题。
树中结点数在范围 [0, 104] 内
-1000 <= Node.val <= 1000
```

注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/ 

# 解题
## 解题1
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
    if(!root) return "[]"
    const res = []
    dfs(root)
    return JSON.stringify(res)

    function dfs(node) {
        if(!node) {
            res.push(null)
            return
        }
        res.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data == "[]") return null
    const arr = JSON.parse(data)
    return dfs()

    function dfs() {
        const val = arr.shift()
        if(val == null) return null
        const node = new TreeNode(val)
        node.left = dfs()
        node.right = dfs()
        return node
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```

## 解题2
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