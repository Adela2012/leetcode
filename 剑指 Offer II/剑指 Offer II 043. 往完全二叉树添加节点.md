# 剑指 Offer II 043. 往完全二叉树添加节点
完全二叉树是每一层（除最后一层外）都是完全填充（即，节点数达到最大，第 n 层有 2n-1 个节点）的，并且所有的节点都尽可能地集中在左侧。

设计一个用完全二叉树初始化的数据结构 CBTInserter，它支持以下几种操作：

- CBTInserter(TreeNode root) 使用根节点为 root 的给定树初始化该数据结构；
- CBTInserter.insert(int v)  向树中插入一个新节点，节点类型为 TreeNode，值为 v 。使树保持完全二叉树的状态，并返回插入的新节点的父节点的值；
- CBTInserter.get_root() 将返回树的根节点。


示例 1：
```
输入：inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
输出：[null,1,[1,2]]
```
示例 2：
```
输入：inputs = ["CBTInserter","insert","insert","get_root"], inputs = [[[1,2,3,4,5,6]],[7],[8],[]]
输出：[null,3,4,[1,2,3,4,5,6,7,8]]
```

提示：
```
最初给定的树是完全二叉树，且包含 1 到 1000 个节点。
每个测试用例最多调用 CBTInserter.insert  操作 10000 次。
给定节点或插入节点的每个值都在 0 到 5000 之间。
```

注意：本题与主站 919 题相同： https://leetcode-cn.com/problems/complete-binary-tree-inserter/

# 解题
1. CBTInserter方法
   1. 初始化head指针，指向root
   2. 将root推入队列queue
   3. 如果队首元素是有左右子树，说明不是我们要找的插入元素的父节点，
   4. 将队首元素出队列，并将左右子树入队列
2. insert方法
   1. queue队列里是缺少子树的节点
   2. 判断队首元素缺少左子树，
      1. 执行 `father.left = node`
   3. 判断队首元素缺少右子树，
      1. 执行 `father.right = node`，
      2. 这时，该father节点已完全填充，出队列，`this.queue.shift()`
      3. 并将其左右子树入队列，`this.queue.push(father.left, father.right)`
   4. 最后返回父元素的值
3. get_root方法
   1. 返回head指针
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
 */
var CBTInserter = function(root) {
    this.head = root
    this.queue = [root]
    while(this.queue[0] && this.queue[0].left && this.queue[0].right) {
        let node = this.queue.shift()
        this.queue.push(node.left)
        this.queue.push(node.right)
    }
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    const node = new TreeNode(v)
    let father = this.queue[0]
    if (father.left) {
        father.right = node
        this.queue.shift()
        this.queue.push(father.left, father.right)
    } else {
        father.left = node
    }
    return father.val
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.head
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
```