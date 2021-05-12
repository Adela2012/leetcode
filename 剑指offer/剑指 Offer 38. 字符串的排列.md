# 剑指 Offer 38. 字符串的排列
输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:
```
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 ```

限制：
```
1 <= s 的长度 <= 8
```

# 解题

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const res = []
    let c = s.split('')
    dfs(0)
    return res

    function dfs(x) {
        if (x == s.length - 1) {
            res.push(c.join(''))
            return
        }

        const set = new Set()
        for (let i = x; i < c.length; i++) {
            if (set.has(c[i])) continue
            set.add(c[i])
            swap(c, i, x)
            dfs(x+1)
            swap(c, i, x)
        }
    }

    
};

function swap(arr, x, y) {
    const tmp = arr[x]
    arr[x] = arr[y]
    arr[y] = tmp
}
```