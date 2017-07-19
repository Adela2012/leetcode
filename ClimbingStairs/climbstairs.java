public class Solution {
    public int climbStairs(int n) {
        if (n <= 1) return 1;
        
        int onestep = 1;
        int twostep = 1;
        int allway = 0;
        
        for(int i = 2; i <= n; i++) {
            allway = onestep + twostep;
            twostep = onestep;
            onestep = allway;
        }
        return allway;
    }
}