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
var constructMaximumBinaryTree = function(nums) {
  return construct(nums, 0, nums.length)
};

function construct(nums, l, r) {
  if (l == r) return null
  let max_i = max(nums, l, r)
  let root = new TreeNode(nums[max_i])
  root.left = construct(nums, l, max_i)
  root.right = construct(nums, max_i + 1, r)
  return root
};

function max(nums, l , r) {
  let max_i = l
  for (let i = l; i < r; i++) {
      if (nums[max_i] < nums[i]) {
          max_i = i
      }
  }
  return max_i
}