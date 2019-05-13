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
var sum  = 0
var sumRootToLeaf = function(root) {
    sum = 0
    dsf(root, 0)
    return sum
};

var dsf = function (node, val) {
    if (node == null) return
    val = val * 2 + node.val
    if (node.left == node.right) sum += val
    dsf(node.left, val)
    dsf(node.right, val)
}