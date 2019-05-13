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

var arr = []
var isUnivalTree = function(root) {
    arr = []
    dfs(root)
    for (let i of arr) {
        if (i != arr[0]) return false
    }
    return true
};

var dfs = function (node) {
    if (node != null) {
        arr.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
}