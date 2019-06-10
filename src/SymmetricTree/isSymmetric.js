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
var isSymmetric = function(root) {
    if(root == null) return true;
    return helper(root.left, root.right);
};
var helper = function(lt, rt) {
    if(lt == null && rt == null) return true;
    if(lt == null || rt == null) return false;
    if(lt.val == rt.val) {
        return helper(lt.left, rt.right) && helper(lt.right, rt.left);
    } else 
        return false;
}