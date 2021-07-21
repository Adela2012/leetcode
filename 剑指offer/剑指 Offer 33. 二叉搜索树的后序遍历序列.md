# 剑指 Offer 33. 二叉搜索树的后序遍历序列
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：
```
     5
    / \
   2   6
  / \
 1   3
 ```
示例 1：
```
输入: [1,6,3,2,5]
输出: false
```
示例 2：
```
输入: [1,3,2,6,5]
输出: true
```

提示：
```
数组长度 <= 1000
```

# 解题
```js
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    let stack = [], root = Number.MAX_VALUE
    for (let i = postorder.length - 1; i >= 0; i--) {
        if(postorder[i] > root) return false
        while(stack.length > 0 && postorder[i] < stack[stack.length - 1]) root = stack.pop()
        stack.push(postorder[i])
    }
    return true
};
```
