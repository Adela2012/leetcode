# 剑指 Offer 36. 二叉搜索树与双向链表
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

 

为了让您更好地理解问题，以下面的二叉搜索树为例：

 

<img src="https://assets.leetcode.com/uploads/2018/10/12/bstdlloriginalbst.png">

 

我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。

 

<img src="https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png">

 

特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

# 解题
1. 二叉搜索树的节点的 左树值 < 节点值 < 右树值
2. 题目中说“head” 表示指向链表中有最小元素的节点。所以我们从左->中->右的顺序遍历二叉搜索树
3. 深度优先搜索dfs，我们用pre记录前一个节点，head记录头结点
4. 判断pre节点是否存在
   1. 若pre节点不存在时，说明是第一个节点，head指向当前node，if (!pre) head = node
   2. 若pre节点存在时，说明不是第一个节点，我们可以将前一个节点的后继节点指向当前node，if (pre) pre.right = node
5. 因为是从小到大遍历的，所以知道当前节点的前一个节点，因此 
   1. 当当前节点node的前驱节点指向pre，node.left = pre，
   2. 在下次循环前，将pre指向当前node，pre = node
6. 遍历完整个二叉树，我们需要将首尾节点进行串联，此时head指向头结点，pre指向尾节点，因此
   1. 将尾结点pre的后继节点指向头结点head，pre.right = head
   2. 将头结点head的前驱节点指向尾结点pre，head.left = pre
```js
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if (root == null) return root
    let head, pre
    dfs(root)
    head.left = pre
    pre.right = head
    return head

    function dfs(node) {
        if (!node) return
        dfs(node.left)

        if (!pre) head = node
        else pre.right = node
        node.left = pre
        pre = node

        dfs(node.right)
    }
    
};
```

- 时间复杂度O(N)
- 空间复杂度O(1)
