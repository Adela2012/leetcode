# 剑指 Offer II 075. 数组相对排序
给定两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

 

示例：
```
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
```

提示：
```
1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
arr2 中的元素 arr2[i] 各不相同
arr2 中的每个元素 arr2[i] 都出现在 arr1 中
```

注意：本题与主站 1122 题相同：https://leetcode-cn.com/problems/relative-sort-array/ 


# 解题
1. 第一个for循环：采用map来存储arr2的顺序
2. 第二个for循环：判断arr1中的数n，
   1. 若map中有，则将数量+1，
   2. 若无，则推入right中
3. 第三个for循环：将map中的值按顺序和个数推入到left
4. 将right按照从小到大的顺序进行排列
5. 最后返回left和right的集合数组
```js
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map =  new Map(), left = [], right = []
    for (const n of arr2) {
        map.set(n, 0)
    }
    for (const n of arr1) {
        map.has(n) ? map.set(n, map.get(n) + 1) : right.push(n)
    }
    for (let [key, val] of map) {
        while(val-- > 0) left.push(key)
    }
    right.sort((a, b) => a - b)
    return [...left, ...right]
};
```
- 时间复杂度：O(N + KlogK)，N = arr1.length，K 为不在arr2中出现的arr1中剩余的数量
- 空间复杂度：O(M)，存储map所用空间
