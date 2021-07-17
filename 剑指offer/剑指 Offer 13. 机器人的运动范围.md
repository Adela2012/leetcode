# 剑指 Offer 13. 机器人的运动范围
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

示例 1：
```
输入：m = 2, n = 3, k = 1
输出：3
```
示例 2：
```
输入：m = 3, n = 1, k = 0
输出：1
```
提示：
```
1 <= n,m <= 100
0 <= k <= 20
```

# 解题
```js
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let arr = []
    for (let i = 0; i < m; i++) {
        arr.push(Array(n).fill(0))
    }
    return dfs(0, 0, 0, 0)


    function dfs(i, j, ic, jc) {
        if (i < m && j < n && arr[i][j] == 0 && ic + jc <= k) {
            arr[i][j] = 1
            return 1 + dfs(i, j+1, ic, h(j, jc)) + dfs(i+1, j, h(i, ic), jc)
        }
       return 0
    }

    function h (x, c) {
        return (x + 1) % 10 == 0 ? c - 8 : c + 1
    }

};
```

- 解题2
```js
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let count = 0, arr = []
    for (let i = 0; i < m; i++) {
        arr.push(Array(n).fill(0))
    }
    dfs(0, 0)
    return count

    function dfs(i, j) {
        if (i < m && j < n && arr[i][j] == 0) {
            let sum = getSum(i, j)
            if (sum <= k) {
                count++
                arr[i][j] = 1
                dfs(i,j+1)
                dfs(i+1,j)
            }
        }
       
    }

    function getSum(i, j) {
        let sum = 0
        while(i > 0) {
            sum += i % 10
            i = Math.floor(i / 10)
        }
        while(j > 0) {
            sum += j % 10
            j = Math.floor(j / 10)
        }
        return sum
    }

};
```