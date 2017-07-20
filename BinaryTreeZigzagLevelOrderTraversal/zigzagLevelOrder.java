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
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        List<List<Integer>> wraplist = new LinkedList<List<Integer>>();
        
        if(root == null) return wraplist;
        
        queue.offer(root);
        int flag = -1;
        while(!queue.isEmpty()) {
            int levelnum = queue.size();
            List<Integer> sublist = new LinkedList<Integer>();
            for(int i = 0; i < levelnum; i++) {
                if(queue.peek().left != null) queue.offer(queue.peek().left);
                if(queue.peek().right != null) queue.offer(queue.peek().right);
                if(flag == -1)
                     sublist.add(queue.poll().val);
                else
                    sublist.add(0, queue.poll().val);
            }
            flag = -flag;
            
            
            wraplist.add(sublist);
            
        }
        
        return wraplist;
    }
}