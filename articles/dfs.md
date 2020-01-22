# 深度优先搜索
学习深度优先搜索DFS，要了解以下两个方面
- DFS是什么
- DFS能解决什么问题

## DFS是什么
深度优先搜索将会从第一个指定的顶点开始遍历图，`沿着路径直到这条路径最后一个顶点`被访问了，`接着原路回退并探索下一条路径`。换句话说，先深后广。

深度优先搜索算法不需要一个源顶点，若图中顶点A未访问，则访问该顶点A。
1. 标注A为被发现的（灰色）。
1. 对于A的所有未访问的邻点B，访问顶点B，标注A为已被探索的（黑色）。
DFS的步骤是递归的，可以使用栈和递归来实现。

## DFS解决什么问题
- 加权最短路径
- 拓扑排序


## 算法题目：
1. 树的遍历[【2020-01-16】199. Binary Tree Right Side View](https://github.com/Adela2012/leetcode/issues/3)
1. 图的遍历[【2020-01-15】130. Surrounded Regions](https://github.com/Adela2012/leetcode/issues/2)


## 参考资料
1. 学习JavaScript数据结构与算法
1. 算法图解
1. LeetCode
