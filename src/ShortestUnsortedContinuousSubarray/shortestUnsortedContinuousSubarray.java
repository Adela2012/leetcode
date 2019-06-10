class Solution {
    public int findUnsortedSubarray(int[] nums) {
        int n = nums.length;
        int beg = -1 , end = -2;
        int max = nums[0], min = nums[n - 1];
        for (int i = 1; i < n; i++) {
            min = Math.min(min, nums[n - 1 - i]) ;
            max = Math.max(max, nums[i]) ;
            if(min < nums[n - 1 - i]) beg = n - 1 -i;
            if(max > nums[i]) end = i;
        }
        return end - beg + 1;
    }
}