public class Solution {
    public int reverse(int x) {
        long res = 0;
        while(x != 0) {
            res = res * 10 + x % 10;
            x = x / 10;
        }
        res = (res < Integer.MIN_VALUE ||  res >  Integer.MAX_VALUE) ? 0 : res;
        return (int)res;
    }
}