/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getDepth(root) != -1; 
};
var getDepth = function(root) {
    if (root == null) return 0;
    var left = getDepth(root.left);
    if(left != -1) {
        var right = getDepth(root.right);
        if(right != -1) {
            return Math.abs(left - right) <= 1 ? 1 + Math.max(left, right) : -1;
        }
    }
    return -1;
}