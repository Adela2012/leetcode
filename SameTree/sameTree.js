/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(q == null && p == null) return true;
    if(q == null || p == null) return false;
    return q.val == p.val && isSameTree(p.left, q.left) && isSameTree(q.right, p.right);
};