/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let res = []
    let queue = [root] 
    while(queue.length != 0) {
        let size = queue.length
        let sum = 0
        for(let i = 0; i < size; i++) {
            let node = queue.shift()
            sum += node.val
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        res.push(sum/size)
    }
    return res
};