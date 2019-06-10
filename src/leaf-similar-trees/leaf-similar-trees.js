/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let leaf1 = []
  let leaf2 = []
  getAllLeaf(root1, leaf1)
  getAllLeaf(root2, leaf2)
  if (leaf1.length != leaf2.length) return false
  return leaf1.every((item, i) => item == leaf2[i])
};

var getAllLeaf = function (root, leaf) {
  if (!root) return
  if (!root.left && !root.right) {
    leaf.push(root.val)
  }
  getAllLeaf(root.left, leaf)
  getAllLeaf(root.right, leaf)
}