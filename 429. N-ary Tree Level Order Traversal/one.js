/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    if (!root) return []
    let res = []
    let queue = [root]
    while(queue.length) {
        let level = []
        let count = queue.length
        for (let i = 0; i < count; i++) {
            let node = queue.shift()
            level.push(node.val)
            for (let i of node.children) {
                queue.push(i)
            }
        }
        res.push(level)
    }
    return res
};