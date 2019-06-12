/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n == 0) return []
  return generateSubtrees(1, n)
};

var generateSubtrees = function(s, e) {
  let res = []
  if (s > e) {
      res.push(null)
      return res
  }
  for (let i = s; i <= e; i++) {
      let leftSubtree = generateSubtrees(s, i - 1)
      let rightSubtree = generateSubtrees(i+1, e)
      
      for (let left of leftSubtree) {
          for (let right of rightSubtree) {
              let root = new TreeNode(i)
              root.left = left
              root.right = right
              res.push(root)
          }
      }
  }
  return res
}