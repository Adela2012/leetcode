public class Solution {
    public void rotate(int[] nums, int k) {
        int count = 0;
        k = k % nums.length;
        for(int start = 0; count < nums.length; start++) {
            int current = start;
            int pre = nums[start];
            do{
                int next = (k + current) % nums.length;
                int temp = nums[next];
                nums[next] = pre;
                pre = temp;
                current = next;
                count++;
            } while(start != current);
        }
            
    }
}