# 剑指 Offer II 055. 二叉搜索树迭代器

实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器：

- BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
- boolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。
- int next()将指针向右移动，然后返回指针处的数字。

注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。

可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 的中序遍历中至少存在一个下一个数字。

 

示例：


```
  7
 / \
3  15
   / \
  9  20

输入
inputs = ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
inputs = [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
输出
[null, 3, 7, true, 9, true, 15, true, 20, false]

解释
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // 返回 3
bSTIterator.next();    // 返回 7
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 9
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 15
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 20
bSTIterator.hasNext(); // 返回 False
```

提示：

- 树中节点的数目在范围 [1, 105] 内
- 0 <= Node.val <= 106
- 最多调用 105 次 hasNext 和 next 操作


进阶：

- 你可以设计一个满足下述条件的解决方案吗？next() 和 hasNext() 操作均摊时间复杂度为 O(1) ，并使用 O(h) 内存。其中 h 是树的高度。
 

注意：本题与主站 173 题相同： https://leetcode-cn.com/problems/binary-search-tree-iterator/

# 解题
## 解题1
1. 中序遍历，将节点值存于队列queue中
2. next方法返回出队列的值
3. hasNext方法返回队列中是否有值
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
var BSTIterator = function(root) {
    this.queue = []
    const dfs = (node) => {
        if(!node) return
        dfs(node.left)
        this.queue.push(node.val)
        dfs(node.right)
    }
    dfs(root)
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.queue.shift()
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.queue.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```
- 时间复杂度：初始化需要O(N)，N为节点数量，next和hasNext方法O(1)复杂度。
- 空间复杂度：O(N)，N为节点数量。

## 解题2
1. 使用栈和指针，在初始化方法中定义栈stack和指针cur
2. 在next方法中，
   1. 当cur指针指向节点存在时，不断推入栈中，并将指针指向节点的左节点，进行中序遍历
   2. while循环跳出时，将node节点从栈顶推出，同时将cur指针指向node的右节点，为下次next做推入stack准备
   3. 返回node.val的值
3. hasNext方法返回cur指针指向存在或者栈不为空。
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
var BSTIterator = function(root) {
    this.stack = []
    this.cur = root
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    while(this.cur) {
        this.stack.push(this.cur)
        this.cur = this.cur.left
    }
    const node = this.stack.pop()
    const res = node.val
    this.cur = node.right
    return res
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.cur || this.stack.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```
- 时间复杂度：初始化和hasNext需要O(1)，next单次的复杂度，最差情况下为O(N)，N为节点数量，均摊为O(1)。
- 空间复杂度：O(N)，N为节点数量。