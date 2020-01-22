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