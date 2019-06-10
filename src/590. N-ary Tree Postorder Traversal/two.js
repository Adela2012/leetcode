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
    for (let i of node.children) {
        dfs(i)
    }
    arr.push(node.val)
}