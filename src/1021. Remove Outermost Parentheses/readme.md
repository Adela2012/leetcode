1021. Remove Outermost Parentheses
Easy

A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

 

Example 1:
```
Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
```
Example 2:
```
Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
```
Example 3:
```
Input: "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
 ```

Note:
```
S.length <= 10000
S[i] is "(" or ")"
S is a valid parentheses string
```

# 解题
使用l来记录左右括号的差值
```
(()())(())(()(()))
121210121012123210
```
只有当左括号的l大于1，右括号的l大于0，才是期望值
```js
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let res = '', l = 0
    for(let i of S) {
        if (i == '(' && ++l > 1) {
            res += '('
        } 
        if (i == ')' && --l > 0) {
            res += ')'
        }
    }
    return res
};
```

```js
var removeOuterParentheses = function(S) {
    let res = '', l = 0
    for(let i of S) {
        if ((i == '(' && ++l > 1) || (i == ')' && --l > 0)) {
            res += i
        } 
    }
    return res
};
```