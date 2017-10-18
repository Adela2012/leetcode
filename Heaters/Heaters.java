class Solution {
    public int findRadius(int[] houses, int[] heaters) {
        Arrays.sort(houses);
        Arrays.sort(heaters);
        int j = 0; int res = 0;
        for(int i = 0; i < houses.length; i++) {
            while(j < heaters.length - 1 && Math.abs(heaters[j+1] - houses[i]) <=  Math.abs(heaters[j] - houses[i])) 
                j++;
            res = Math.max(res, Math.abs(heaters[j] - houses[i]));
        }
        return res;
    }
}