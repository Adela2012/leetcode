public class Solution {
    public int maxSubArray(int[] nums) {
        if(nums.length == 0) return 0;
        return helper(nums, 0, nums.length - 1);
    }
    public int helper(int[] nums, int left, int right) {
        if (left >= right) return nums[left];
        int mid = left + ((right - left) / 2);
        int lmax = helper(nums, left, mid - 1);
        int rmax = helper(nums, mid + 1, right);
        int mmax = nums[mid], cur = mmax;
        for(int i = mid - 1; i >= left; --i) {
            cur += nums[i];
            mmax = Math.max(mmax, cur);
        }
        cur = mmax;
        for(int i = mid + 1; i <= right; ++i) {
            cur += nums[i];
            mmax = Math.max(mmax, cur);
        }
        return Math.max(mmax, Math.max(lmax,rmax));
    }
}