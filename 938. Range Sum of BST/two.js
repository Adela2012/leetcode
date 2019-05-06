/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
let ans
var rangeSumBST = function(root, L, R) {
    ans = 0
    dfs(root, L, R)
    return ans
};

var dfs = function (node, L, R) {
    if (node != null) {
        console.log(node, L, R)
        if (L <= node.val && node.val <= R) 
             ans += node.val
        if (L < node.val) 
            dfs(node.left, L, R)
        if (R > node.val) 
            dfs(node.right, L, R)
    }
}