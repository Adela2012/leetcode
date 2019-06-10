/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
let arr = []
var postorder = function(root) {
    arr = []
    dfs(root)
    return arr
};

var dfs = function(node) {
    if (node == null) return
    arr.unshift(node.val)
    for (let i = node.children.length - 1; i >= 0; i--) {
        dfs(node.children[i])
    }
}