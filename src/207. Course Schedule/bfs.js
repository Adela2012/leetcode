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