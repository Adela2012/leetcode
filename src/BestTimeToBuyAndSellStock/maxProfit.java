public class Solution {
    public int maxProfit(int[] prices) {
        int cur = 0; int res = 0;
        for(int i = 1; i < prices.length; i++) {
            cur = Math.max(0 , cur += prices[i] - prices[i - 1]);
            res = Math.max(cur, res);
        }
        return res;
    }
}