class Solution {
    public double findMaxAverage(int[] nums, int k) {
        long sum = 0;
        for(int j = 0; j < k; j++)
            sum += nums[j];
        long max = sum;
        for(int i = k; i < nums.length; i++) {
            sum = sum + nums[i] - nums[i - k];
            max = Math.max(sum, max);
        }

        return max/1.0/k;
    }
}