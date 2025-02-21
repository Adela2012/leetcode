# 剑指 Offer II 116. 省份数量

有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。

返回矩阵中 省份 的数量。

 

示例 1：
```
输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
输出：2
```
示例 2：

```
输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
输出：3
```

提示：
```
1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] 为 1 或 0
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]
```

注意：本题与主站 547 题相同： https://leetcode-cn.com/problems/number-of-provinces/


# 解题
## 解题1
DFS
```js
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const visited = new Set()
    const n = isConnected.length
    let ans = 0
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i)
            ans++
        } 
    }
    return ans

    function dfs(i) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] == 1 && !visited.has(j)) {
                visited.add(j)
                dfs(j)
            }
        }
    }
};
```
## 解题2
BFS
```js
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const visited = new Set(), queue =[]
    const n = isConnected.length
    let ans = 0
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            queue.push(i)
            while(queue.length) {
                const k = queue.shift()
                visited.add(k)
                for (let j = 0 ; j < n; j++) {
                    if (isConnected[k][j] == 1 && !visited.has(j)) {
                        queue.push(j)
                    }
                }
            }
            ans++
        } 
    }
    return ans

    
};
```
## 解题3
并查集

如果之前没有接触过并查集，做这道题之前先看一下[剑指 Offer II 118. 多余的边](https://leetcode.cn/problems/7LpjUW/solution/by-adela2012-9rpk/)的内容会好很多。

1. 转化成一个图，城市是一个个节点，城市之间是否相似看成节点之间的边。
2. 可以将题目转化成有多少个单独的节点，也就是`f`数组中下标和元素相同的数量有多少。

其中有2个需要理解一下

1. 向上找连通的根节点
```js
const find = i => i == f[i] ? i : find(f[i])
```


2. 当城市i，j的连通根节点不同，且城市间相连时，将这两个连通。
```js
const f1 = find(i), f2 = find(j)
if (isConnected[i][j] == 1 && f1 != f2) {
    f[f1] = f2
}
```

```ts
function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length
    const f = new Array(n).fill(0).map((_,i) => i)
    const find = i => i == f[i] ? i : find(f[i])

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const f1 = find(i), f2 = find(j)
            if (isConnected[i][j] == 1 && f1 != f2) {
                f[f1] = f2
            }
        }
    }
    return f.filter((v, i) => v == i).length
};
```
- 时间复杂度：O(N^2)
- 空间复杂度：O(N)