class Solution {
    public List<String> readBinaryWatch(int num) {
        List<String> res = new ArrayList<>();
        int[] num1 = new int[]{1, 2, 4, 8};
        int[] num2 = new int[]{1, 2, 4, 8, 16, 32};
        for(int i = 0; i <= num; i++) {
            List<Integer> h = digit(num1, i);
            List<Integer> m = digit(num2, num - i);
            System.out.println(h);
            for(int x : h) {
                if(x >= 12) continue;
                for(int y : m) {
                    if(y >= 60) continue;
                    res.add(String.format("%d:%02d", x, y));
                }
            }
        }
        return res;
    }
    
    private List<Integer> digit(int[] nums, int count) {
        List<Integer> res = new ArrayList<>();
        digitHelper(nums, count, 0 , 0, res);
        return res;
    }
    
    private void digitHelper(int[] nums, int count, int pos, int sum, List<Integer> res) {
        if(count == 0) {
            res.add(sum);
            return;
        }
        
        for(int i = pos; i < nums.length; i++) 
            digitHelper(nums, count - 1, i + 1, sum + nums[i], res);
    }
}