754. Reach a Number
Easy
You are standing at position 0 on an infinite number line. There is a goal at position target.

On each move, you can either go left or right. During the n-th move (starting from 1), you take n steps.

Return the minimum number of steps required to reach the destination.

Example 1:
Input: target = 3
Output: 2
Explanation:
On the first move we step from 0 to 1.
On the second step we step from 1 to 3.
Example 2:
Input: target = 2
Output: 3
Explanation:
On the first move we step from 0 to 1.
On the second move we step  from 1 to -1.
On the third move we step from -1 to 2.
Note:
target will be a non-zero integer in the range [-10^9, 10^9].


## 754. 到达终点数字

在一根无限长的数轴上，你站在0的位置。终点在target的位置。

每次你可以选择向左或向右移动。第 n 次移动（从 1 开始），可以走 n 步。

返回到达终点需要的最小移动次数。

示例 1:
```
输入: target = 3
输出: 2
解释:
第一次移动，从 0 到 1 。
第二次移动，从 1 到 3 。
```

示例 2:
```
输入: target = 2
输出: 3
解释:
第一次移动，从 0 到 1 。
第二次移动，从 1 到 -1 。
第三次移动，从 -1 到 2 。
```

注意:

- target是在[-10^9, 10^9]范围中的非零整数。


来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/reach-a-number)



## 解法
1. 注意target的范围，有正负数，但正负数关系不大，需要做一步将负数转正的操作。
2. 每n次移动走n步，1+2+3+...+n = sum，n步的总数就能得出距离是sum。
3. 如果sum == target，那么n就是到达终点需要的最小移动次数。
4. 如果sum > target，那么sum - target的值delta就需要翻转步骤中数来完成。
5. delta是偶数，步数还是n。只需找出n中的delta/2的数，进行符号翻转就行。举例：sum - target = 2, (1+2+...+n) - (-1+2+...+n) = 2
6. delta是奇数，则需再走n+1和n+2的情况。

```js
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  target = Math.abs(target)
  let step = 0
  let sum = 0
  while (sum < target) {
      sum += ++step
  }
  
  while ((sum - target) % 2 != 0) {
      sum += ++step
  }
  
  return step
};
```

```js
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  target = Math.abs(target)
  let k = 0
  while (target > 0) {
      target -= ++k
  }
  return target % 2 == 0 ? k : k + 1 + k % 2
};
```
**复杂度分析**

时间复杂度：O(\sqrt{target})， k 为 target 的平方根级别。

空间复杂度：O(1)。




