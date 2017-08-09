public class Solution {
    public int majorityElement(int[] nums) {
        int m = nums[0], c = 1;
        for(int i = 1; i < nums.length; i++) {
            if(c == 0) {
                c++;
                m = nums[i];
            } else if(m == nums[i]) {
                c++;
            } else c--;
        }
        return m;
    }
}