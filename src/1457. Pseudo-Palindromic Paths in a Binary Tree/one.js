/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    let count = 0
    function preorder(node, path){
        if (node == null) return
        path = path ^ (1 << node.val) 
        
        if (node.left == null && node.right == null) {
            if ((path & (path - 1)) == 0) {
                ++count
            }
        }
        preorder(node.left, path)
        preorder(node.right, path)
    }
    
    preorder(root, 0)
    return count
};