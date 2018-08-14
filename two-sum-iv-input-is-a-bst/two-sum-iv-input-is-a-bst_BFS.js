/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let queue = [root]
    let map = new Set()
    while(queue.length) {
        let node = queue.shift()
        if(map.has(k-node.val)) {
            return true
        } else {
            map.add(node.val)
        }
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)  
    }
    return false
};