# 剑指 Offer II 053. 二叉搜索树中的中序后继

给定一棵二叉搜索树和其中的一个节点 p ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 null 。

节点 p 的后继是值比 p.val 大的节点中键值最小的节点，即按中序遍历的顺序节点 p 的下一个节点。



示例 1：
![285_example_1.png](https://pic.leetcode-cn.com/1638174196-ETvQrM-285_example_1.png)


```
输入：root = [2,1,3], p = 1
输出：2
解释：这里 1 的中序后继是 2。请注意 p 和返回值都应是 TreeNode 类型。
```
示例 2：
![285_example_2.png](https://pic.leetcode-cn.com/1638174207-GVTlUS-285_example_2.png)


```
输入：root = [5,3,6,2,4,null,null,1], p = 6
输出：null
解释：因为给出的节点没有中序后继，所以答案就返回 null 了。
```

提示：
```
树中节点的数目在范围 [1, 104] 内。
-105 <= Node.val <= 105
树中各节点的值均保证唯一。
```

注意：本题与主站 285 题相同： https://leetcode-cn.com/problems/inorder-successor-in-bst/


# 解题
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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let res = null, cur = root
    while(cur){
        if(cur.val > p.val) {
            res = cur
            cur = cur.left
        } else {
            cur = cur.right
        }
    }
    return res
};
```