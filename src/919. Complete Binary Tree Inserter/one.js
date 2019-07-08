/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
  this.tree = [root]
  for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i].left != null) this.tree.push(this.tree[i].left)
      if (this.tree[i].right != null) this.tree.push(this.tree[i].right)
  }
};

/** 
* @param {number} v
* @return {number}
*/
CBTInserter.prototype.insert = function(v) {
  let N = this.tree.length
  let node = new TreeNode(v)
  this.tree.push(node)
  if (N % 2 == 1) 
      this.tree[(N - 1) >> 1].left = node
  else 
      this.tree[(N - 1) >> 1].right = node
  return this.tree[(N - 1) >> 1].val
      
};

/**
* @return {TreeNode}
*/
CBTInserter.prototype.get_root = function() {
  return this.tree[0]
};

/** 
* Your CBTInserter object will be instantiated and called as such:
* var obj = new CBTInserter(root)
* var param_1 = obj.insert(v)
* var param_2 = obj.get_root()
*/