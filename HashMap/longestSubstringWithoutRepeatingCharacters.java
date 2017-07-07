public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int ans = 0, i = 0;
        Map<Character, Integer> map = new HashMap<>();
        for (int j = 0; j < s.length(); j++) {
            if (map.containsKey(s.charAt(j))) {
                i = Math.max(i, map.get(s.charAt(j)));
            }
            ans = Math.max(j + 1 - i, ans);
            map.put(s.charAt(j), j + 1);
        }
        return ans;
    }
}