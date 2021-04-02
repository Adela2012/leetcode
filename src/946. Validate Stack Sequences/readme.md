# 946. Validate Stack Sequences
Medium

Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

 

Example 1:
```
Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```
Example 2:
```
Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
```

Constraints:
```
0 <= pushed.length == popped.length <= 1000
0 <= pushed[i], popped[i] < 1000
pushed is a permutation of popped.
pushed and popped have distinct values.
```

# 解题

## 解题1
维护了一个栈stack，模拟pushed的过程，用指针i来指向pushed的值，p指向popped的值。

第一次while，将pushed中的值全部推入stack
1. 在stack不为空时，要先验证stack中的栈顶值跟popped[i]是否相同，相同的话，要将stack的栈顶元素弹出。并且要将p++
2. 将pushed中的值全部推入stack中，即pushed[i] != popped[i]
3. 如果pushed[i] == popped[i]，p和i都指向数组的下一个元素
   
第二次while，每次stack的弹出的栈顶元素，都要跟popped的顺序一样才行，如果不一致，那么就不是正确的栈弹出序列
```js
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = []
    let i = 0, p = 0
    while(i < pushed.length && p < popped.length) {
        if (stack.length && stack[stack.length - 1] == popped[p]) {
            stack.pop()
            p++
        } else if (pushed[i] != popped[p]) {
            stack.push(pushed[i++])
        } else {
          p++
          i++
        }
    }
    
    while(stack.length &&  p < popped.length) {
        if (stack.pop() == popped[p]) {
            p++
        } else {
            return false
        }
    }
    return true
};
```

## 解题2
关注于popped出栈元素，该出栈元素，只有两种情况：
1. 当前栈顶元素
2. 即将入栈元素

for循环，关注于出栈元素。
while循环，只要stack为空或者stack的栈顶元素不为出栈元素，就将pushed中的元素持续入栈。

比较stack的栈顶元素，是否跟popped的顺序一样，如果不一致，那么就不是正确的栈弹出序列。

如果一样，在进入下一次for循环之前，将当前的stack栈顶元素弹出。

```js
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = []
    for (let i = 0, j = 0; i < popped.length; i++) {
        while(j < pushed.length && (stack.length == 0 || stack[stack.length - 1] != popped[i])) {
            stack.push(pushed[j++])
        }
        if (stack[stack.length - 1] != popped[i]) return false
        stack.pop()
    }
    return true
};
```