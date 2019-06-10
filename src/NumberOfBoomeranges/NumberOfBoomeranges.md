#447. Number of Boomerangs
Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]

定义一种类似“回形标”的三元组结构，即在三元组(i, j, k)中i和j之间的距离与i和k之间的距离相等。找到一组坐标数据中，可构成几组这样的“回形标”结构。