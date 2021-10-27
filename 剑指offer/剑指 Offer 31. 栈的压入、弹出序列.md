# 剑指 Offer 31. 栈的压入、弹出序列
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

 

示例 1：
```
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```
示例 2：
```
输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
 ```

提示：
```
0 <= pushed.length == popped.length <= 1000
0 <= pushed[i], popped[i] < 1000
pushed 是 popped 的排列。
```

# 解题
## 解题1 
1. stack数组用于模拟推入栈的顺序
2. 遍历popped推出值i，当stack为空或者stack的栈顶值不为popped推出值i时，持续将pushed中的值推入
3. while循环结束时，比较stack栈顶值是不是为popped推出值i，不是，直接返回false
4. 将stack栈顶元素出栈，开始popped下一个出栈值i的比较
5. 最后循环结束，返回true
```js
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = []
    for (let i of popped) {
        while(pushed.length > 0 && (stack.length == 0 || stack[stack.length - 1] !== i)) {
            stack.push(pushed.shift())
        }
        if (stack[stack.length - 1] !== i) return false
        stack.pop()
    }

    return true
};
```
- 时间复杂度 O(N)
- 空间复杂度 O(N)

## 解题2
1. stack数组用于模拟推入栈的顺序
2. 遍历pushed推出值i，将推入到stack栈中
3. 循环比较stack栈顶元素和popped[k]推出值是否相等，如果相等，将stack栈顶元素出栈，并执行k++
4. 最后返回stack是否为空
```js
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [], k = 0
    for (let i of pushed) {
        stack.push(i)
        while (stack.length && stack[stack.length - 1] == popped[k]) {
            stack.pop()
            k++
        }
    }
    return stack.length == 0
};
```