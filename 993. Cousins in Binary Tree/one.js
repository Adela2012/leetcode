/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
let depth
let parent
var isCousins = function(root, x, y) {
    depth = {}
    parent = {}
    dfs(root, null) 
    return depth[x] == depth[y] && parent[x] != parent[y]
};

var dfs = function (node, par) {
    if (node != null) {
        depth[node.val] = par != null ? 1 + depth[par.val] : 0
        parent[node.val] = par
        dfs(node.left, node)
        dfs(node.right, node)
    }
}