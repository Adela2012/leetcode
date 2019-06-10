class Solution {
    public boolean isAnagram(String s, String t) {
        int[] m = new int[26];
        for (int i = 0; i < s.length(); i++) m[s.charAt(i) - 'a']++; 
        for (int i = 0; i < t.length(); i++) m[t.charAt(i) - 'a']--; 
        for (int i : m) if (i != 0) return false;
        return true;
    }
}