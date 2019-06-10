public class Solution {
    public int[] singleNumber(int[] nums) {
        int diff = 0;
        for(int i : nums) {
            diff ^= i;
        }
        diff &= -diff;
        
        int[] arr = {0, 0};
        for(int i : nums) {
            if( (diff & i) == 0 ) {
                arr[0] ^= i;
            } else {
                arr[1] ^= i;
            }
        }
        return arr;
    }
}