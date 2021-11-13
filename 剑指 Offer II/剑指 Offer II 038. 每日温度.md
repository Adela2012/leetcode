# 剑指 Offer II 038. 每日温度
请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

 

示例 1:
```
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
```
示例 2:
```
输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
```
示例 3:
```
输入: temperatures = [30,60,90]
输出: [1,1,0]
```

提示：
```
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
```

注意：本题与主站 739 题相同： https://leetcode-cn.com/problems/daily-temperatures/

# 解题
# 解题1
1. 暴力双循环
```js
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = []
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                res[i] = j - i
                break
            }
        }
        if (!res[i]) res[i] = 0
    }
    return res
};
```
- 时间复杂度O(N^2)，N 为 temperatures 的长度。
- 空间复杂度O(1)。
  
# 解题2
1. 维持一个单调递减栈
2. 每次推入 temperatures 的下标到 stack 栈中
3. 每次推入前，
   1. 如果栈不为空，且栈顶元素的表示下标的 temperatures 值小于当前 temperatures[i]，
   2. 则将栈顶元素index推出，并更新 res[index] = i - index
```js
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [], res = new Array(temperatures.length).fill(0)
    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop()
            res[index] = i - index
        }
        stack.push(i)
    }
    return res
};
```
- 时间复杂度O(N)，N 为 temperatures 的长度。
- 空间复杂度O(N)，额外使用了栈。