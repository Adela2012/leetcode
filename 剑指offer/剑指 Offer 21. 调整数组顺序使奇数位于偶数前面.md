# 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

 

示例：
```
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
```

提示：
```
0 <= nums.length <= 50000
1 <= nums[i] <= 10000
```

# 解题
判断奇偶数的方法：
- 整除2，即 num % 2 === 0 表示偶数，num % 2 === 1 表示奇数
- 位于&，即 num & 1 === 0 表示偶数，num & 1 === 1 表示奇数

## 解题1 
1. 额外空间数组arr
2. 遍历nums数组，如果是奇数，就从头推入arr，如果是偶数，就从尾推入arr
3. 最后返回数组arr


```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let arr = []
    for (let i of nums) {
        if (i % 2 == 0) arr.push(i)
        else arr.unshift(i)
    }
    return arr
};
```

- 时间复杂度O(N)
- 空间复杂度O(N)

## 解题2
1. 快慢双指针，变量i表示待更换的奇数的下标，j表示正常遍历的下标
2. 遍历nums数组，如果nums[j]是奇数，就把下标j和i的上的数字更换
3. 更换以后，下标指向下一个待更换的下标，即i++
4. 遍历完成以后，返回nums原数组

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    for (let i = 0, j = 0; j < nums.length; j++) {
        if (nums[j] & 1) swap(nums, i++, j)
    }
    return nums
};

function swap(nums, i, j) {
    let tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}

```

- 时间复杂度O(N)
- 空间复杂度O(1)

## 解题3
1. 首尾双指针
2. 循环条件i < j，即指针不重合
3. 若nums[i]是奇数，i++，并继续循环
4. 若nums[j]是偶数，j--，并继续循环
5. 否则调换下标i和j上的数字
6. 最后返回原数组nums
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let i = 0, j = nums.length - 1
    while(i < j) {
        if ((nums[i] & 1) == 1) {
            i++
            continue
        }
        if ((nums[j] & 1) == 0) {
            j--
            continue
        }
        swap(nums,i++,j--)
    }
    return nums
};

function swap (nums, i, j) {
    let t = nums[i]
    nums[i] = nums[j]
    nums[j] = t
}
```
- 时间复杂度O(N)
- 空间复杂度O(1)