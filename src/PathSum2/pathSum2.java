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
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        List<List<Integer>> wraplist = new LinkedList<List<Integer>>();
        List<Integer> curlist = new LinkedList<Integer>();
        depthSum(curlist, wraplist, root, sum);
        return wraplist;
    }
    public void depthSum(List<Integer> cur, List<List<Integer>> list, TreeNode root, int sum) {
        if(root == null) return ;
        cur.add(new Integer(root.val));
        if(root.left == null && root.right == null && root.val == sum) {
            list.add(new LinkedList(cur));
            cur.remove(cur.size() - 1);
            return;
        } else {
            depthSum(cur, list, root.left, sum - root.val);
            depthSum(cur, list, root.right, sum - root.val);           
        }
        cur.remove(cur.size() - 1);
        
    }
}