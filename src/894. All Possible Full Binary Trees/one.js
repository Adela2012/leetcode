/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (N) {
  let map = new Map()
  return dfs(N)

  function dfs(N) {
    if (!map.has(N)) {
      let ans = []
      if (N == 1) {
        ans.push(new TreeNode(0))
      } else if (N % 2 == 1) {
        for (let x = 0; x < N; x++) {
          let y = N - 1 - x
          for (let left of dfs(x)) {
            for (let right of dfs(y)) {
              let bns = new TreeNode(0)
              bns.left = left
              bns.right = right
              ans.push(bns)
            }
          }
        }
      }
      map.set(N, ans)
    }
    return map.get(N)
  }
};