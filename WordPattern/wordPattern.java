class Solution {
    public boolean wordPattern(String pattern, String str) {
        String[] words = str.split(" ");
        if (words.length != pattern.length()) 
            return false;
        Map map = new HashMap();
        for(Integer i = 0; i < words.length; i++) {
            if(map.put(words[i], i) != map.put(pattern.charAt(i) , i)) return false;
        }
        return true;
    }
}