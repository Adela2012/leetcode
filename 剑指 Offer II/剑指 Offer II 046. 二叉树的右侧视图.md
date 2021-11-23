# 剑指 Offer II 046. 二叉树的右侧视图
给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 

示例 1:

![tree.jpg](https://pic.leetcode-cn.com/1637636569-EBDMcn-tree.jpg)


```
输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
```
示例 2:
```
输入: [1,null,3]
输出: [1,3]
```
示例 3:
```
输入: []
输出: []
```

提示:
```
二叉树的节点个数的范围是 [0,100]
-100 <= Node.val <= 100 
```

注意：本题与主站 199 题相同：https://leetcode-cn.com/problems/binary-tree-right-side-view/

# 解题
1. 特殊情况：根节点为null时，返回空数组
2. 初始化一个队列queue，将根节点推入
3. 如果队列长度存在，
   1. 拿到当前队列的长度len，也就是当前层级的节点数量，
   2. 将当前层级的最右侧值，也就是队列尾部元素的值，推入res数组中
   3. 将当前层级的节点数量依次推出
   4. 将当前层级的节点的左右子树推入队列
5. 最后返回res
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
var rightSideView = function(root) {
    if (!root) return []
    const queue = [root], res = []
    while(queue.length) {
        let len = queue.length
        res.push(queue[len - 1].val)
        while(len-- > 0) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return res
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)