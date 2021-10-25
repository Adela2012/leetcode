# 剑指 Offer 66. 构建乘积数组
给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

 

示例:
```
输入: [1,2,3,4,5]
输出: [120,60,40,30,24]
```

提示：
```
所有元素乘积之和不会溢出 32 位整数
a.length <= 100000
```

# 解题
1. 不能使用除法，就将除a[i]以外的数字都相乘就可。
2. 顺序计算a[i]前累乘的积，记录在b[i]中
3. 逆序计算a[i]后累乘的积，记录在t变量中，
4. 并将顺序计算的a[i]前累乘的积，相乘，更新b[i]值，
5. 最后返回b数组
```js
/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
    if (a.length == 0) return a
    let b = [1], t = 1
    for (let i = 1; i < a.length; i++) {
        b[i] = a[i-1] * b[i-1]
    }
    for(let i = a.length - 2; i >= 0; i--) {
        t *= a[i+1]
        b[i] *= t
    }
    return b
};
```

- 时间复杂度O(N)
- 空间复杂度O(N)