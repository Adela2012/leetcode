/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public boolean isSymmetric(TreeNode root) {
        return root == null || helper(root.left, root.right); 
    }
    public boolean helper(TreeNode lt, TreeNode rt) {
        if(lt == null || rt == null)
            return lt == rt;
        if(lt.val == rt.val)
            return helper(lt.left, rt.right) && helper(lt.right, rt.left);
        else 
            return false;
    }
}