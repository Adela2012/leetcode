# 剑指 Offer II 044. 二叉树每层的最大值
给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

 

示例1：
```
输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]
解释:
          1
         / \
        3   2
       / \   \  
      5   3   9 
```

示例2：
```
输入: root = [1,2,3]
输出: [1,3]
解释:
          1
         / \
        2   3
```

示例3：
```
输入: root = [1]
输出: [1]
```

示例4：
```
输入: root = [1,null,2]
输出: [1,2]
解释:      
           1 
            \
             2     
```

示例5：
```
输入: root = []
输出: []
```

提示：
```
二叉树的节点个数的范围是 [0,104]
-231 <= Node.val <= 231 - 1
```

注意：本题与主站 515 题相同： https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/


# 解题
1. 特殊情况处理：根节点为null时，返回空数组
2. 初始化一个队列queue，将根节点推入
3. 如果队列长度存在，
   1. 拿到当前队列的长度len，也就是当前层级的节点数量，
   2. 将当前层级的节点数量依次推出，并更新最大值
   3. 将当前层级的节点的左右子树推入队列
   4. 当前层级的节点全部从队列中推出后，将max推入res中
4. 最后返回res
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
var largestValues = function(root) {
    if (!root) return []
    const queue = [root], res = []
    while(queue.length) {
        let len = queue.length, max = Math.pow(-2, 31)
        while (len-- > 0) {
            let node = queue.shift()
            max = Math.max(max, node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(max)
    }
    return res
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)