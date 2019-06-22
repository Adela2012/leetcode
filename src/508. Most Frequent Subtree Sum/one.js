/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  let res = []
  let map = new Map()
  let maxCount = 0
  dsf(root)
  
  let key = [...map.keys()]
  for (let i of key) {
      map.get(i) == maxCount && res.push(i)
  }
  return res
  
  
  function dsf(node) {
      if (node == null) return 0
      let s = dsf(node.left) + dsf(node.right) + node.val
      map.set(s, (map.get(s) || 0) + 1)
      maxCount = Math.max(map.get(s), maxCount)
      return s
  }
};