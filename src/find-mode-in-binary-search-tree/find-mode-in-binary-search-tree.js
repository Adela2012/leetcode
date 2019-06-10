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
var findMode = function(root) {
  if(!root) return []
  var map = new Map()
  var queue = [root]
  while(queue.length) {
      let node = queue.shift()
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
      
      if(map.has(node.val)) map.set(node.val,map.get(node.val) + 1)
      else map.set(node.val, 1)
  }
  var max = 0, res = []
  for(var [key, value] of map) {
      if(value > max) {
          max = value
      }
  }
  for(var [key, value] of map) {
      if(value == max) {
          res.push(key)
      }
  }
  return res
    
};