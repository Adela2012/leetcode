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
var averageOfLevels = function (root, level = 0, counts = []) {
  if (!root) return
  counts[level] = counts[level] || { sum: 0, size: 0 }
  counts[level].sum += root.val
  counts[level].size++
  averageOfLevels(root.left, level + 1, counts)
  averageOfLevels(root.right, level + 1, counts)
  return level || counts.map(item => item.sum / item.size)

};