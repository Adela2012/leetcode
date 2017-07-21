/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return null;
    return helper(nums, 0, nums.length - 1);
};
var helper = function(nums, low, high) {
    if(low > high) return null;
    var mid = low + parseInt((high - low) / 2);
    var root = new TreeNode(nums[mid]);
    root.left = helper(nums, low, mid - 1);
    root.right = helper(nums, mid + 1, high);
    return root;
}