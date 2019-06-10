class Solution {
    public int calPoints(String[] ops) {
        List<Integer> arr = new ArrayList<>();
        for(String op : ops) {
            if(op.equals("C")) {
                arr.remove(arr.size() - 1);
            } else if(op.equals("D")) {
                arr.add(arr.get(arr.size() - 1) * 2);
            } else if (op.equals("+")) {
                arr.add(arr.get(arr.size() - 1) + arr.get(arr.size() - 2));
            } else {
                arr.add(Integer.parseInt(op));
            }
        }
        int sum = 0;
        for(int i : arr) {
            sum += i;
        }
        return sum;
    }
}
