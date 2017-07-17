public class Solution {
    public int searchInsert(int[] nums, int target) {
        int low = 0;int high = nums.length - 1;
        int middle = (low + high) / 2;
        while(low <= high) {
            middle = (low + high) / 2;
            if (nums[middle] < target) {
                low = middle + 1;
            } else if (nums[middle] > target) {
                high = middle - 1;
            } else {
                return middle;
            }
        }
        return low;
    }
}