# 1339. 分裂二叉树的最大乘积

Medium

给你一棵二叉树，它的根为 `root` 。请你删除 `1` 条边，使二叉树分裂成两棵子树，且它们子树和的乘积尽可能大。

由于答案可能会很大，请你将结果对 10^9 + 7 取模后再返回。

示例 1：
![](https://assets.leetcode.com/uploads/2020/01/21/sample_1_1699.png)
```
输入：root = [1,2,3,4,5,6]
输出：110
解释：删除红色的边，得到 2 棵子树，和分别为 11 和 10 。它们的乘积是 110 （11*10）
```

示例 2：
![](https://assets.leetcode.com/uploads/2020/01/21/sample_2_1699.png)
```
输入：root = [1,null,2,3,4,null,null,5,6]
输出：90
解释：移除红色的边，得到 2 棵子树，和分别是 15 和 6 。它们的乘积为 90 （15*6）
```

示例 3：
```
输入：root = [2,3,9,10,7,8,6,5,4,11,1]
输出：1025
```

示例 4：
```
输入：root = [1,1]
输出：1
```

提示：

每棵树最多有 50000 个节点，且至少有 2 个节点。
每个节点的值在 [1, 10000] 之间。

## 解题
拿到这道题的时候，说使二叉树分裂成两棵子树，使子树和的乘积尽可能大。删除一条边，我们可以算出其中断掉的另一个节点的子树和sSum，然后我们可以通过算出数的总和sum，相减就为断边的另一个子树和sum-sSum。使用后序优先的深度遍历，可以很方便的算出。

- 两次dfs
- 一次dfs + for循环

### 两次dfs

- 第一次遍历算出总和sum
- 后序dfs遍历每一个节点，算出子树和sSum，(sum-sSum)*sSum就为两棵子树的乘积
- 比较每一次的乘积，取最大值

- 复杂度分析
  - 空间复杂度：O(1)
  - 时间复杂度：O(N)，N 为 root 的节点个数

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
 * @return {number}
 */
var maxProduct = function(root) {
  var max = 0
  var sum = subSum(root)
  subSum(root, sum)
  return max % (1e9 + 7);
    
  function subSum (node) {
      if(!node) return 0
      let sSum = node.val + subSum(node.left) + subSum(node.right)
      sum && (max = Math.max(max, (sum - sSum) * sSum))
      return sSum
  }
};

```
### 一次dfs + for循环
我们看到上面进行了两次dfs遍历，第一次遍历算出总和，第二次遍历操作总和与子树和。我们可以使用一个数组，在一次遍历时，就将每次的子树和记录在数组中，再遍历这个数组，算出子树和乘积的最大值。

- 复杂度分析
  - 空间复杂度：O(N)
  - 时间复杂度：O(N)，N 为 root 的节点个数

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
 * @return {number}
 */
var maxProduct = function(root) {
  const subSums = new Array()
  let max = 0
  const sum = subSum(root)
  for (let i = 0; i < subSums.length; i++) {
      max = Math.max((sum - subSums[i]) * subSums[i], max)
  }
  return max % (1e9 + 7)
  
  function subSum(node) {
    if(!node) return 0
    const sSum = node.val + subSum(node.left) + subSum(node.right)
    subSums.push(sSum)
    return sSum
  }
};
```


## 来源
- [leetcode](https://leetcode-cn.com/problems/maximum-product-of-splitted-binary-tree/)


## 英文
1339. Maximum Product of Splitted Binary Tree

Medium

Given a binary tree root. Split the binary tree into two subtrees by removing 1 edge such that the product of the sums of the subtrees are maximized.

Since the answer may be too large, return it modulo 10^9 + 7.

 

Example 1:

![](https://assets.leetcode.com/uploads/2020/01/21/sample_1_1699.png)

```
Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)
```
Example 2:

![](https://assets.leetcode.com/uploads/2020/01/21/sample_2_1699.png)

```
Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation:  Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
```

Example 3:

```
Input: root = [2,3,9,10,7,8,6,5,4,11,1]
Output: 1025
```

Example 4:

```
Input: root = [1,1]
Output: 1
```

Constraints:

Each tree has at most 50000 nodes and at least 2 nodes.
Each node's value is between [1, 10000].