public class Solution {
    public int maxProfit(int[] prices) {
        int release1 = 0, release2 = 0;
        int hold1 = Integer.MIN_VALUE, hold2 = Integer.MIN_VALUE;
        for(int val : prices) {
            release2 = Math.max(release2, hold2 + val);
            hold2 = Math.max(hold2, release1 - val);
            release1 = Math.max(release1, hold1 + val);
            hold1 = Math.max(hold1, - val);
        }
        return release2;
    }
}