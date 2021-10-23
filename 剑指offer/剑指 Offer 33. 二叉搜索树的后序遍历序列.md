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
后序遍历：左 -> 右 -> 主
二叉搜索树： 左边树值比根值小，右边树值比根值大

## 解题1
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
## 解题2

```js
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    return  h(0, postorder.length-1)
    function h(i,j) {
        if (i >= j) return true
        let p = 0
        while(postorder[p] < postorder[j]) p++
        let m = p
        while(postorder[p] > postorder[j]) p++

        return p == j &&  h(i,m-1) && h(m, j-1)

    }
};
```


