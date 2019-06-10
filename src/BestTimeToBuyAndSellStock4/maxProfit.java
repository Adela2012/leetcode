public class Solution {
    public int maxProfit(int k, int[] prices) {
        if(k >= prices.length / 2) {
            int res = 0;
            for(int i = 1; i < prices.length; i++) {
                if(prices[i] - prices[i - 1] > 0) res += prices[i] - prices[i - 1];
            }
            return res;
        }
        
        int[] release = new int[k+1];
        int[] hold = new int[k+1];
        
        for(int i = 0; i < k+1; i++) hold[i]=Integer.MIN_VALUE;
        
        for(int val: prices) {
            for(int i = 1; i <= k; i++) {
                release[i] = Math.max(release[i], hold[i] + val);
                hold[i] = Math.max(hold[i], release[i - 1] - val);
            }
        }
        return release[k];
    }
}