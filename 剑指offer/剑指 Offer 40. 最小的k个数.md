# 剑指 Offer 40. 最小的k个数
输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

示例 1：
```
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
```
示例 2：
```
输入：arr = [0,1,2,1], k = 1
输出：[0]
```

限制：
```
0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000
```
# 解题

**解题1**
采用sort排序方法，然后截取前k个数
```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    arr.sort((a, b) => a - b)
    return arr.slice(0, k)
};
```

**解题2**
- 采用快速排序的思想。
- 将小于某个值v的数，移到v的左边，将大于v的数，移到v的右边。`j = partition(arr, low, high)`
- 判断小于v的左边的数量是否满足K数量。k - 1为索引值。`j == k - 1 ? `
- 如果正好满足，则v值下标左边的数据（不一定是递增排序）`arr.slice(0, k)`
- 如果左边数量小于k数量, 对右边继续进行快排。 `quickSearch(arr, j + 1, high, k - 1)`
- 如果左边数量大于k数量, 对左边继续进行快排。 `quickSearch(arr, low, j - 1, k - 1)`
```js
var getLeastNumbers = function(arr, k) {
    if (arr.length == 0 || k == 0) return []
    return quickSearch(arr, 0, arr.length - 1, k - 1)
};

function quickSearch(arr, low, high, num) {
    let j = partition(arr, low, high)
    if (num == j) return arr.slice(0, j+1)
    return num < j ? quickSearch(arr, low, j - 1, num) : quickSearch(arr, j+1, high, num)
}

function partition(arr, low, high) {
    let v = arr[low], i = low, j = high + 1
    while(true) {
        while(++i <= high && arr[i] < v);
        while(--j >= low && arr[j] > v);
        if (i >= j) break
        swap(arr, i, j)
    }
    swap(arr, low, j)
    return j
}

function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
```

**解题3**
因为有[0, 10000]的数量限制，所以可以采用下标的方式进行排序获得tmp，最后在循环tmp，计算前K的个数。
```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if (arr.length == 0 || k == 0) return []
    let tmp = new Array(10001).fill(0)
    for (let i of arr) {
        tmp[i] += 1
    }
    let res = []
    for (let i in tmp) {
        let count = tmp[i]
        while (count-- > 0) {
            res.push(i)
            if (--k == 0) break
        }
        if (k == 0) break
    }
    return res
};
```