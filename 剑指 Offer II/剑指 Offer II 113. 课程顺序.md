# 剑指 Offer II 113. 课程顺序
现在总共有 numCourses 门课需要选，记为 0 到 numCourses-1。

给定一个数组 prerequisites ，它的每一个元素 prerequisites[i] 表示两门课程之间的先修顺序。 例如 prerequisites[i] = [ai, bi] 表示想要学习课程 ai ，需要先完成课程 bi 。

请根据给出的总课程数  numCourses 和表示先修顺序的 prerequisites 得出一个可行的修课序列。

可能会有多个正确的顺序，只要任意返回一种就可以了。如果不可能完成所有课程，返回一个空数组。

 

示例 1:
```
输入: numCourses = 2, prerequisites = [[1,0]] 
输出: [0,1]
解释: 总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
```
示例 2:
```
输入: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
输出: [0,1,2,3] or [0,2,1,3]
解释: 总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
 因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
```
示例 3:
```
输入: numCourses = 1, prerequisites = [] 
输出: [0]
解释: 总共 1 门课，直接修第一门课就可。
```

提示:
```
1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
prerequisites 中不存在重复元素
```

注意：本题与主站 210 题相同：https://leetcode-cn.com/problems/course-schedule-ii/

# 解题


BFS 


```javaScript []
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(0).map(() => []), indeg = new Array(numCourses).fill(0)
    for (const c of prerequisites) {
        const [i, j] = c
        graph[j].push(i)
        ++indeg[i]
    }
    const queue = [], ans = []
    for (let i = 0; i < numCourses; i++) {
        if (indeg[i] == 0) queue.push(i)
    }
    while(queue.length) {
        let node = queue.shift()
        ans.push(node)
        if (graph[node]) {
            for (let j of graph[node]) {
                --indeg[j]
                if (indeg[j] == 0) queue.push(j)
            }
        }
    }
    return ans.length == numCourses ? ans : []
};
```


```typeScript []
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const edges = new Map(), indeg = new Map()

    for (let i = 0; i < numCourses; i++) {
        if (!edges.has(i)) edges.set(i, [])
        if (!indeg.has(i)) indeg.set(i, 0)
    }

    for (let [a, b] of prerequisites) {
        edges.get(b).push(a)
        indeg.set(a, indeg.get(a) + 1)
    }
    const queue = [], ans = []
    for (let [key, val] of indeg) {
        if (val == 0) queue.push(key)
    }

    while(queue.length) {
        let node = queue.shift()
        let arr = edges.get(node)
        ans.push(node)
        for (let i of arr) {
            indeg.set(i, indeg.get(i) - 1)
            if (indeg.get(i) == 0) {
                queue.push(i)
            }
        }
    }

    return ans.length == numCourses ? ans : []

};
```
