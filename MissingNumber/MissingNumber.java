class Solution {
    public int missingNumber(int[] nums) {
        int x = 0, i = 0;
        for(;i < nums.length; i++) 
            x = x ^ i ^ nums[i];
        return x^i;
    }
}