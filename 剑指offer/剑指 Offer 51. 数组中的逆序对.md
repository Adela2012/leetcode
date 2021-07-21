# 剑指 Offer 51. 数组中的逆序对
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

 

示例 1:
```
输入: [7,5,6,4]
输出: 5
```

限制：
```
0 <= 数组长度 <= 50000
```

# 解题
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let sum = 0
    sortMerge(nums)
    return sum

    function sortMerge(arr) {
        if (arr.length <= 1) return arr

        let mid = arr.length >> 1
        let leftArr = arr.slice(0, mid)
        let rightArr = arr.slice(mid)

        return merge(sortMerge(leftArr), sortMerge(rightArr))
    }

    function merge(leftArr, rightArr) {
        let leftLen = leftArr.length
        let rightLen = rightArr.length
        let len = leftLen+rightLen
        let arr = []
        for(let index = 0, i = 0, j = 0; index < len; index++) {
            if (i >= leftLen) arr[index] = rightArr[j++]
            else if (j >= rightLen) arr[index] = leftArr[i++]
            else if (leftArr[i] <= rightArr[j]) arr[index] = leftArr[i++]
            else {
                arr[index] = rightArr[j++]
                sum += leftLen - i
            }
        }
        return arr
    }   
};
```