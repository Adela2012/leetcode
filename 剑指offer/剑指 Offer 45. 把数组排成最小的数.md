# 剑指 Offer 45. 把数组排成最小的数
输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

 

示例 1:
```
输入: [10,2]
输出: "102"
```
示例 2:
```
输入: [3,30,34,5,9]
输出: "3033459"
```


提示:
```
0 < nums.length <= 100
```

说明:

- 输出结果可能非常大，所以你需要返回一个字符串而不是整数
- 拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0

# 解题
1. 使用Array.prototype.sort()方法用原地算法对数组的元素进行排序
2. 指明 compareFunction ，数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素： 
   1. compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前
   2. compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变
   3. compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前
3. 这里的compareFunction = (a, b) => `${a}${b}`-`${b}${a}`
   1. 对于a,b拼接起来数，按照`${a}${b}`为最小进行数组排序
4. 最后将原地排序的nums数组进行字符串拼接返回

```js
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    return nums.sort((a, b) => `${a}${b}`-`${b}${a}`).join('')
}; 
```