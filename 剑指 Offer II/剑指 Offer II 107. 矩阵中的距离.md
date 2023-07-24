# 剑指 Offer II 107. 矩阵中的距离

给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。

 

示例 1：

![image](https://pic.leetcode-cn.com/1626667201-NCWmuP-image.png){:width="150"}



```
输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
输出：[[0,0,0],[0,1,0],[0,0,0]]
```
示例 2：

![image](https://pic.leetcode-cn.com/1626667205-xFxIeK-image.png){:width="150"}

```
输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
输出：[[0,0,0],[0,1,0],[1,2,1]]
```

提示：
```
m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
mat 中至少有一个 0 
```

注意：本题与主站 542 题相同：https://leetcode-cn.com/problems/01-matrix/

# 解题
```js
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const n = mat.length, 
        m = mat[0].length, 
        dir = [[1,0],[-1,0],[0,1],[0,-1]]
        ans = new Array(n).fill(0).map(() => new Array(m).fill(0)),
        seen = new Array(n).fill(0).map(() => new Array(m).fill(false)),
        queue = []
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (mat[i][j] == 0) {
                queue.push([i, j])
                seen[i][j] = true
            }
        }
    }
    while(queue.length) {
        const q = queue.shift()
        const i = q[0], j = q[1]
        for(let d of dir) {
            const [x, y] = [i+d[0], j+d[1]]
            if(x >= 0 && x < n && y >= 0 && y < m && !seen[x][y]) {
                ans[x][y] = ans[i][j] + 1
                queue.push([x,y])
                seen[x][y] = true
            }

        }
    }

    return ans
};
```