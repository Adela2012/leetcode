# 207. Course Schedule
Medium

There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:
```
Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
```
Example 2:
```
Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
```
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.


## 207. 课程表
现在你总共有 n 门课需要选，记为 0 到 n-1。

在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]

给定课程总量以及它们的先决条件，判断是否可能完成所有课程的学习？

示例 1:
```
输入: 2, [[1,0]] 
输出: true
解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
```
示例 2:
```
输入: 2, [[1,0],[0,1]]
输出: false
解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
```
说明:

输入的先决条件是由边缘列表表示的图形，而不是邻接矩阵。详情请参见图的表示法。
你可以假定输入的先决条件中没有重复的边。
提示:

这个问题相当于查找一个循环是否存在于有向图中。如果存在循环，则不存在拓扑排序，因此不可能选取所有课程进行学习。
通过 DFS 进行拓扑排序 - 一个关于Coursera的精彩视频教程（21分钟），介绍拓扑排序的基本概念。
拓扑排序也可以通过 BFS 完成。


## 解题
这是一道很明显的拓扑排序题。通过判断课程是否是有向无环图（DAG）来进行解题。
- 广度优先遍历 BFS + queue
- 深度优先遍历 DFS + recursive

### BFS + queue
- 算法流程
1. 定义一个数组indegrees，长度为课程的数量，下标key代表为课程，值value代表它的入度（前置课程数量）
1. 定义一下队列，将所有入度（前置课程数量）为0的课程推入队列。
1. 当队列不为空时循环，
    1. 按照先入先出的顺序，将课程pre推出，并且将课程数量numCourses减去1
    1. 遍历prerequisites，若前置课程中有等于pre的课程cur，就将cur的入度（前置课程数量）减去1，同时判断其入度（前置课程数量）是否为0，若是，则推入队列。
1. 判断numCourses是否为0，若是，则说明所有课程都入队并出过队，完成了拓扑排序。否则，则说明课程中存在环，一定有课程的前置课程不为0.

- 复杂度分析
    - 时间复杂度 O(N * M), N 和 M 分别为节点数量和临边数量；
    - 空间复杂度 O(N + M)

```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let indegrees = new Array(numCourses).fill(0)
  for (let cp of prerequisites) {
    indegrees[cp[0]]++
  }
  let queue = []
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] == 0) queue.push(i)
  }
  while (queue.length) {
    let pre = queue.shift()
    numCourses--
    for (let req of prerequisites) {
      if (req[1] == pre && --indegrees[req[0]] == 0) queue.push(req[0])
    }
  }
  return numCourses == 0
};
```

### DFS + recursive
- 算法流程
1. 定义一个邻接矩阵adjacency
1. 定义一个数组flags，用于判断每个节点i（课程）的状态
    1. 未被DFS访问 i == 0
    1. 已被其他节点启动的DFS访问 i == -1
    1. 已被当前节点启动的DFS访问 i == 1
1. 对于numCourses的每个节点依次执行DFS，判断每个节点起步DFS是否存在环，若存在，返回false。
    1. 终止条件：判断flag[i]， 若为-1, 说明当前节点已被其他节点启动的DFS访问，返回true；若为1，说明本轮搜索中节点被第二次访问，即课程安排图有环，返回false
    1. 将当前访问节点对应的flag[i]置1，标记其被本轮DFS访问过。
    1. 递归访问当前节点i的所有邻接矩阵j，当发现环，返回false
    1. 当前节点所有邻接节点已被遍历，没有发现环，将当前节点flag[i]置-1，返回true
1. 若整个图DFS结束并未发现环，返回true

- 复杂度分析：
    - 时间复杂度 O(N * M)，N 和 M 分别为节点数量和临边数量；
    - 空间复杂度 O(N^2)，为建立矩阵所需额外空间。

```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let adjacency = []
  for (let i = 0; i < numCourses; i++) {
    adjacency.push(new Array(numCourses).fill(0))
  }
  let flags = new Array(numCourses).fill(0)
  for (let cp of prerequisites) {
    adjacency[cp[1]][cp[0]] = 1
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(adjacency, flags, i)) return false
  }
  return true
};

function dfs(adjacency, flags, i) {
  if (flags[i] == 1) return false
  if (flags[i] == -1) return true
  flags[i] = 1
  for (let j = 0; j < adjacency.length; j++) {
    if (adjacency[i][j] == 1 && !dfs(adjacency, flags, j)) return false
  }
  flags[i] = -1
  return true
}
```


## 来源：
- [力扣（LeetCode）](https://leetcode-cn.com/problems/course-schedule)
- [LeetCode](https://leetcode.com/problems/course-schedule/)
- [课程表（拓扑排序：入度表BFS法 / DFS法，清晰图解）](https://leetcode-cn.com/problems/course-schedule/solution/course-schedule-tuo-bu-pai-xu-bfsdfsliang-chong-fa/)