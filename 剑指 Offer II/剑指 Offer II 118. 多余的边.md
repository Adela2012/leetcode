# 剑指 Offer II 118. 多余的边
树可以看成是一个连通且 无环 的 无向 图。

给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。

请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的边。

 

示例 1：


```
输入: edges = [[1,2],[1,3],[2,3]]
输出: [2,3]
```
示例 2：

```

输入: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
输出: [1,4]
```

提示:
```
n == edges.length
3 <= n <= 1000
edges[i].length == 2
1 <= ai < bi <= edges.length
ai != bi
edges 中无重复元素
给定的图是连通的 
```

注意：本题与主站 684 题相同： https://leetcode-cn.com/problems/redundant-connection/

# 解题

并查集，找到最后一条出现的导致闭环的边。
我们以`[[2,1],[2,3],[3,4],[1,4],[1,5]]`举例，
初始值设置，`f = [ 0, 1, 2, 3, 4, 5 ]`

[a,b]|f1,f2| f1 != f2 | f
:--|:--|:--|:--
 |  | | | [ 0, 1, 2, 3, 4, 5 ]
[2,1] | 2, 1 | true | [ 0, 1, `1`, 3, 4, 5 ]
[2,3]| 1, 3 | true | [ 0, `3`, 1, 3, 4, 5 ]
[3,4] | 3, 4 | true | [ 0, 3, 1, `4`, 4, 5 ]
[1,4]  | 4, 4 | false | 

其中有两个需要理解一下

1. 向上找连通的根节点
```js
const find = i => i == f[i] ? i : find(f[i])
```


2. 当a和b的连通根节点不同时，将这两个连通
```js
const f1 = find(a), f2 = find(b)
if (f1 != f2) f[f1] = f2
```



```ts []
function findRedundantConnection(edges: number[][]): number[] {
    const n = edges.length
    const f = new Array(n+1).fill(0).map((_,i) => i)

    const find = i => i == f[i] ? i : find(f[i])

    for (const [a, b] of edges) {
        const f1 = find(a), f2 = find(b)
        if (f1 != f2) f[f1] = f2
        else return [a, b]
    }
};
```
- 时间复杂度：O(N)
- 空间复杂度：O(N)