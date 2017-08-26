class Solution {
    public int[][] matrixReshape(int[][] nums, int r, int c) {
        int n = nums.length, m = nums[0].length;
        if(n*m != r*c) return nums;
        int[][] arr = new int[r][c];
        for(int i = 0; i < r*c; i++) {
            arr[i/c][i%c] = nums[i/m][i%m];
        }
        return arr;
    }
}