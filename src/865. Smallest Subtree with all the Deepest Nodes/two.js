/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var subtreeWithAllDeepest = function(root) {
  var dfs = function(node, parent) {
      if (node != null) {
          depth.set(node, depth.get(parent) + 1)
          dfs(node.left, node)
          dfs(node.right, node)
      }
  }

  var answer = function(node){
      if (node == null || depth.get(node) == max_depth)
          return node
      let l = answer(node.left)
      let r = answer(node.right)
      if (l != null && r != null) return node
      if (l != null) return l
      if (r != null) return r
      return null
  } 
  
 //  ================================= 
  
  let depth = new Map()
  let max_depth = -1
  depth.set(null, -1)
  dfs(root, null)
  let arr = [...depth.values()]
  for (let i = 0; i < arr.length; i++) {
      max_depth = Math.max(max_depth, arr[i])
  }
  return answer(root)


};
