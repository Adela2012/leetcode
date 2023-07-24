/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let obj = {'(': ')', '{':'}', '[':  ']'}
    for (let i = 0; i < s.length; i++) {
        let cur = s[i]
        if (obj[cur]) {
            stack.push(cur)
        } else {
            let pop = stack.pop()
            if (obj[pop] != cur) return false
        }
    }
    return !stack.length
};
// @lc code=end

