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
**解法1**
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

**解法2**
1. 归并排序解法，采用下标标记分治的边界。
2. 分
   1. 如果左边界值大于等于右边界，说明该数组为空或者长度为1，返回0
   2. 在[left,right]边界内，获得中间下标数mid
   3. 返回逆序对res的个数为左区间和右区间的逆序对的和
3. 治
   1. 接下去是合并，且在合并过程中拿到逆序对的值
   2. 建立临时变量，赋值当前nums在[left,right]区间的值，后面依据该值改变nums的值
   3. i从[left, mid]下标区间开始遍历，j从[mid+1, right]下标区间开始遍历，
   4. 遍历k从[left, right]区间，比较tmp[i]和tmp[j]的值
   5. 如果tmp[i] < tmp[j]，说明是顺序对，nums[k] = tmp[i]，并且i++，同理如果j超出了[mid+1, right]的边界
   6. 如果tmp[i] > tmp[j]，说明是**逆序对**，nums[k] = tmp[j]，并且j++，同理如果i超出了[left, mid]的边界
   7. 在上一步骤中，我们可以在这个过程中将res的值更新为 mid - i + 1，即在[left,mid]区间中该值i后面的值，相对于tmp[j]都为逆序对。
   8. 最后返回res

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    return mergeSort(0, nums.length - 1)

    function mergeSort(left, right) {
        if (left >= right) return 0
        let mid = (left + right) >> 1
        let res = mergeSort(left, mid) + mergeSort(mid+1, right)
        let tmp = []
        for (let k = left; k <= right; k++) tmp[k] = nums[k]
        for (let k = left, i = left, j = mid + 1; k <= right; k++) {
            if (i > mid) nums[k] = tmp[j++]
            else if (j > right) nums[k] = tmp[i++]
            else if (tmp[i] <= tmp[j]) nums[k] = tmp[i++]
            else {
                nums[k] = tmp[j++]
                res += mid - i + 1
            }
        } 
        return res
    }
};
```
- 时间复杂度O(NlogN)
- 空间复杂度 O(N)