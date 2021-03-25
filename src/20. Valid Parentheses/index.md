20. Valid Parentheses
Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:
```
Input: s = "()"
Output: true
```
Example 2:
```
Input: s = "()[]{}"
Output: true
```
Example 3:
```
Input: s = "(]"
Output: false
```
Example 4:
```
Input: s = "([)]"
Output: false
```
Example 5:
```
Input: s = "{[]}"
Output: true
```

Constraints:
```
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
```



# 解题1
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 != 0) return false
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = []
    for (let i of s) {
        if (map[i]) stack.push(i)
        else {
            let p = stack.pop()
            if (map[p] !== i) return false
        }
    }
    return stack.length == 0
        
};
```