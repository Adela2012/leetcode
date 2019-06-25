/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

var constructFromPrePost = function(pre, post) {
  this.pre = pre
  this.post = post
  return make(0, 0, pre.length)
  
  function make (i, j , N) {
      if (N == 0) return null
      let root = new TreeNode(pre[i])
      if (N == 1) return root
      
      let L = 1
      for (; L < N; ++L) {
          if (post[j + L - 1] == pre[i + 1]) 
              break
      }
      root.left = make(i + 1, j, L)
      root.right = make(i + L + 1, j + L, N - 1 - L)
      return root
  }
};