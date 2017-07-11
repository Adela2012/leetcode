public class Solution {
    public boolean isPalindrome(int x) {
        int h = 1;
        
        if (x < 0)  return false;
        
        while(x / h >= 10) {
            h = h * 10;
        }
        
        while(x > 0) {
           if( x / h != x % 10 ) return false;
            x = x % h / 10;
            h = h / 100;
        }
        
        return true;
        
        
    }
}