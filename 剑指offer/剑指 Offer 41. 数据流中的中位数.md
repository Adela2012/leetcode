# 剑指 Offer 41. 数据流中的中位数
如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，
```
[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5
```
设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。

示例 1：
```
输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
```

示例 2：

```
输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]
```

限制：
```
最多会对 addNum、findMedian 进行 50000 次调用。
```

# 解题
- 从小到大排序，二分查找插入
- 
```js
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.arr.length == 0) {
        this.arr.push(num)
        return
    }
    let i = 0, j = this.arr.length - 1
    while (i <= j) {
        let mid = (i + j) >> 1
        if (this.arr[mid] == num) {
            this.arr.splice(mid, 0, num)
            return
        } else if (this.arr[mid] < num) {
            i = mid + 1
        } else {
            j = mid - 1
        }
    }
    this.arr.splice(j + 1, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let mid = this.arr.length >> 1
    if (this.arr.length % 2) {
        return this.arr[mid]
    } else {
        return (this.arr[mid] + this.arr[mid - 1]) / 2
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```