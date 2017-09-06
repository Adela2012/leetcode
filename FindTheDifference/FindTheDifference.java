class Solution {
    public char findTheDifference(String s, String t) {
        int charCode = t.charAt(s.length());
        for(int i = 0; i < s.length(); i++) {
            charCode += (int)t.charAt(i);
            charCode -= (int)s.charAt(i);
        }
        return (char)charCode;
    }
}