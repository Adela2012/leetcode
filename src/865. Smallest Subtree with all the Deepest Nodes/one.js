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
  return dsf(root).node
};

var dsf = function (node) {
  if (node == null) return new Result(null, 0)
  let l = dsf(node.left)
  let r = dsf(node.right)
  if (l.count > r.count) return new Result(l.node, l.count+1)
  if (r.count > l.count) return new Result(r.node, r.count+1)
  
  return new Result(node, l.count+1)
};

var Result = function (node, count) {
  this.node = node
  this.count = count
}