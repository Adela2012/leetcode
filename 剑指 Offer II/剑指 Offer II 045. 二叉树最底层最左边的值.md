# 剑指 Offer II 045. 二叉树最底层最左边的值
给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。

 

示例 1:

![tree1.jpg](https://pic.leetcode-cn.com/1637635776-YwPYQp-tree1.jpg)

```
输入: root = [2,1,3]
输出: 1
```
示例 2:

![tree2.jpg](https://pic.leetcode-cn.com/1637635789-CoHOsN-tree2.jpg)

```
输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7
```

提示:
```
二叉树的节点个数的范围是 [1,104]
-231 <= Node.val <= 231 - 1 
```

注意：本题与主站 513 题相同： https://leetcode-cn.com/problems/find-bottom-left-tree-value/

# 解题
1. 特殊情况：题目设定二叉树中至少有一个节点，所以不必考虑root为null的情况
2. 初始化一个队列queue，将根节点推入
3. 如果队列长度存在，
   1. 拿到当前队列的长度len，也就是当前层级的节点数量，
   2. 将当前层级的节点数量依次推出
   3. 将当前层级的节点的左右子树推入队列
4. 每次更新完当前层级的全部节点，res更新为队首元素的值
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    const queue = [root]
    let res = root.val
    while(queue.length) {
        let len = queue.length
        while(len-- > 0) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        if(queue[0]) res = queue[0].val
    }
    return res
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)