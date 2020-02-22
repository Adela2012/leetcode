# 1011. 在 D 天内送达包裹的能力

Medium

传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。

传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。

 

示例 1：
```
输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
输出：15
解释：
船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
第 1 天：1, 2, 3, 4, 5
第 2 天：6, 7
第 3 天：8
第 4 天：9
第 5 天：10

请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 
```

示例 2：
```
输入：weights = [3,2,2,4,1,4], D = 3
输出：6
解释：
船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
第 1 天：3, 2
第 2 天：2, 4
第 3 天：1, 4
```

示例 3：
```
输入：weights = [1,2,3,1,1], D = 4
输出：3
解释：
第 1 天：1
第 2 天：2
第 3 天：3
第 4 天：1, 1
```

提示：

1 <= D <= weights.length <= 50000
1 <= weights[i] <= 500

## 解题
题目求在 D 天内将传送带上的所有包裹送达的船的最低运载能力，我们可以使用二分搜索法。从运载的最小数left，到最大数的最大数right中二分进行求值，找到左边界，即得到满足条件的最低运载能力。

1. 根据题意，得知`left`为`weights`数组中的最大值`max(weights[i])`， `right`为数组之和`sum(weights[i])`。当然，也可以直接设置`left = 0`， `right = 500 * 50000 || Number.MAX_VALUE`
1. 当`left < right`时，进行经典二分查找，`mid`满足判断条件，则区间为`[left, mid]`，否则，区间为`[mid+1, right]`。
1. 如果`mid+1 >= right`，则会跳出`while`循环。因此我们可以得到最小值为`left`。


1. 以上为**二分查找套路**，在这题中的**判断条件**为mid能否在D天中运完。
1. 在canShip函数中，我们循环weights，cur为当前船的可用承载量。当cur < w时，D减去一天。
1. 最后判断D是否大于0，即为能否在D天内运完

- 复杂度分析
    - 时间复杂度：O(NlogN)，其中 N = weights.length
    - 空间复杂度：O(1)

```js
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let left = 0, right = 0
  for (let w of weights) {
      left = Math.max(left, w)
      right += w
  }
  
  while (left < right) {
      let mid = (right + left) >> 1
      if (canShip(weights, D, mid)) {
          right = mid
      } else  {
          left = mid + 1
      }
  }
  
  return left
  
  function canShip(weights, D, K) {
      let cur = K // cur 表示当前船的可用承载量
      for (let w of weights) {
          if (cur < w) cur = K, D--
          cur -= w
      }
      return D > 0 // 能否在D天内运完
  }
};
```


## 来源
- [leetcode](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

## 英文 1011. Capacity To Ship Packages Within D Days

Medium

A conveyor belt has packages that must be shipped from one port to another within D days.

The i-th package on the conveyor belt has a weight of weights[i].  Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.

 

Example 1:
```
Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
Output: 15
Explanation: 
A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed. 
```

Example 2:
```
Input: weights = [3,2,2,4,1,4], D = 3
Output: 6
Explanation: 
A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
```

Example 3:
```
Input: weights = [1,2,3,1,1], D = 4
Output: 3
Explanation: 
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
```

Note:

1 <= D <= weights.length <= 50000
1 <= weights[i] <= 500