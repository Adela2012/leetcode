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
let queue = []
var preorder = function(root) {
    queue = []
    dfs(root)
    return queue
};


var dfs = function (node) {
    if (node == null) return
    queue.push(node.val)
    for (let i of node.children) {
        dfs(i)
    }
}