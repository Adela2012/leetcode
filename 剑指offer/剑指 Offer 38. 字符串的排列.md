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

## 解法1
```js
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const res = [], c = s.split('')
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

## 解法2
```js
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const set = new Set(), visited = {}
    backtrack('')
    return [...set]

    function backtrack(temp) {
        if (temp.length == s.length) return set.add(temp)
        for (let i = 0; i < s.length; i++) {
            if(visited[i]) continue
            visited[i] = true
            backtrack(temp+s[i])
            visited[i] = false
        }
    }
};
```

回溯算法经典模板
```js
function backtrack("原始参数") {
    //终止条件(递归必须要有终止条件)
    if ("终止条件") {
        //一些逻辑操作（可有可无，视情况而定）
        return;
    }

    for (let i = "for循环开始的参数"; i < "for循环结束的参数"; i++) {
        //一些逻辑操作（可有可无，视情况而定）
        //做出选择

        //递归
        backtrack("新的参数");

        //一些逻辑操作（可有可无，视情况而定）
        //撤销选择
    }
}
```