/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let res = Number.MAX_VALUE
    let prev
    var helper = (root) => {
        if (!root) return
        helper(root.left)
        if(prev) res = Math.min(res, root.val - prev.val)
        prev = root
        helper(root.right)
    }
    helper(root)
    return res
};

