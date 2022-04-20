# 剑指 Offer II 085. 生成匹配的括号
正整数 n 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：
```
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
```
示例 2：
```
输入：n = 1
输出：["()"]
```

提示：
```
1 <= n <= 8
```

注意：本题与主站 22 题相同： https://leetcode-cn.com/problems/generate-parentheses/

# 解题
1. 记录开始括号和结束括号的个数，仅在open<n，和open>close的情况下进行下一层级的递归，
2. 当tmp的长度为n的两倍时，说明n对括号已经生成。
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [], tmp = []
    backtrack(0, 0)
    return ans

    function backtrack(open, close) {
        if (tmp.length == n * 2) {
            ans.push(tmp.join(''))
            return
        }
        if (open < n) {
            tmp.push('(')
            backtrack(open+1, close)
            tmp.pop()
        }
        if (close < open) {
            tmp.push(')')
            backtrack(open, close+1)
            tmp.pop()
        }
    }
};
```