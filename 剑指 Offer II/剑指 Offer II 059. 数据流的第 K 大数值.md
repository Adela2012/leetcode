# 剑指 Offer II 059. 数据流的第 K 大数值
设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

请实现 KthLargest 类：

- KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
- int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。
 

示例：

```
输入：
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
输出：
[null, 4, 5, 5, 8, 8]

解释：
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
```

提示：

```
1 <= k <= 104
0 <= nums.length <= 104
-104 <= nums[i] <= 104
-104 <= val <= 104
最多调用 add 方法 104 次
题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素
```

注意：本题与主站 703 题相同： https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/


# 解题
此题求解第 K 大数值，可以维持一个单调递减栈，里面保存K个值。栈顶为所求第 K 大数值。
在MiniStack中：
1. 传入栈的大小，k，并初始化stack
2. 在add方法中，初始化临时栈tmp
   1. 如果stack有长度，并且栈顶元素小于传入的val值，则循环移出栈顶元素，到tmp中存储。
   2. 比较stack的长度是否满足k，小于k时，将val加到stack中
   3. 比较stack的长度是否满足k且tmp栈中存在值，将tmp保存的变量移到stack中
```js
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.miniStack = new MiniStack(k)
    for (const i of nums) {
        this.miniStack.add(i)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.miniStack.add(val)
    return this.miniStack.peek()
};

class MiniStack {
    constructor(k) {
        this.stack = []
        this.k = k
    }
    add(val) {
        const tmp = []
        while(this.stack.length && this.peek() < val) {
            tmp.push(this.stack.pop())
        }
        if (this.stack.length < this.k) {
            this.stack.push(val)
        }
        while(tmp.length && this.stack.length < this.k) {
            this.stack.push(tmp.pop())
        }
    }
    peek() {
        return this.stack[this.stack.length-1]
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
```
- 时间复杂度
  - 初始化时间复杂度：O(NK) ，N = nums.length，K = k
  - 单次插入时间复杂度：O(K)
- 空间复杂度O(K)