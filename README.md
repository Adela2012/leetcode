# tata
做过的LeetCode的题目记录一下。

对一些比较经典的题型进行分类总结。

<br><br><br>

## 目录

- [x] <a href='#sliding-window'>滑动窗口</a>
- [ ] <a href='#wait'>路径（深度优先（DFS）、广度优先（BFS））</a>
- [ ] <a href='#wait'>动态规划</a>
- [ ] <a href='#wait'>贪心</a>
- [ ] <a href='#binary-search-tree'>二叉树（DFS[先序、中序、后序]、BFS）</a>
- [ ] <a href='#wait'>排序（插入、选择、快速、归并、计数）</a>
- [ ] <a href='#wait'>查找</a>
- [ ] <a href='#wait'>回文</a>
- [ ] <a href='#wait'>链表</a>
- [ ] <a href='#wait'>算数</a>
- [ ] <a href='#wait'>二进制</a>


<br><br><br>

## 题目
1. [114. Flatten Binary Tree to Linked List](https://github.com/Adela2012/leetcode/issues/1)

## 内容

### <a name='sliding-window'>滑动窗口</a>

<br>

#### 原题 [1052. Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/)

【题目】

```
Today, the bookstore owner has a store open for customers.length minutes.  Every minute, some number of customers (customers[i]) enter the store, and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy.  If the bookstore owner is grumpy on the i-th minute, grumpy[i] = 1, otherwise grumpy[i] = 0.  When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for X minutes straight, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.
```

这道题是说，在`grumpy`数组的i项`grumpy[i]`为0时，计算`Customers`同下标i的数量`Customers[i]`。同时，有`X`连续时间，可以无视`grumpy`的值。那么这个`X`就是窗口长度了。

【举例】

```
Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
```

【思路】

`sum`用来求值所有`grumpy[i]`为0时候的总值。同时维护一个X的窗口，总值为`win`, `win`在相加个数大于X时，减去窗口前的数`i-X`。`maxWin`为每次窗口变动后的最大值，用Math.max函数来取最大窗口值，当前窗口值。  

- Time: O(n) 
- Space: O(1) 

```js
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let sum = 0
    let maxWin = 0
    let win = 0
    for (let i = 0; i < customers.length; i++) {
        sum += grumpy[i] === 0 ? customers[i] : 0
        win += grumpy[i] * customers[i]
        if ( i >= X) win -= grumpy[i-X] * customers[i-X]
        maxWin = Math.max(win, maxWin)
    }
    return sum + maxWin
};
```


<br>

#### 原题 [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)

【题目】

```
Given a string that consists of only uppercase English letters, you can replace any letter in the string with another letter at most k times. Find the length of a longest substring containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.
```

这道题是说，给一个s字符串，只包括大写英文字母，你能替换最多K次的任何字母为其他字母，找到所有可能性中重复字符串最长的长度。

【举例】

```
Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.
```
用两个B替换两个A，或相反。因此答案为4

```
Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
```
中间那个A替换成B，就变成"AABBBBA"，B的长度为4。

【思路】

用双指针`start/end`维持一个窗口，分别为起始下标和结束下标。 用`end - start + 1 - maxCount > k`循环，直到`end - start + 1 - maxCount == k`为符合的情况，其中`maxCount`值为当前下标为end的字母在窗口中的最大数量。


- Time: O(n) 
- Space: O(1) 

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let maxCount = 0, maxLength = 0, count = Array(26).fill(0)
  for (let start = 0, end = 0; end < s.length; end++ ) {
      let endIndex = s.charCodeAt(end) - 'A'.charCodeAt()
      maxCount = Math.max(++count[endIndex], maxCount)
      while(end - start + 1 - maxCount > k) {
          let startIndex =  s.charCodeAt(start) - 'A'.charCodeAt()
          --count[startIndex]
          start++
      }
      maxLength = Math.max(end-start+1, maxLength)
  }
  return maxLength
};
```

<br>
<br>

### <a name='binary-search-tree'>二叉树</a>

如图所示，二叉树的遍历方式有深度优先DFS的三种方式，后序、前序、中序，还有广度优先BFS遍历方式。

<img src="images/145_transverse.png">

<br>

#### 1. 后序遍历


#### 2. 中序遍历

#### 3. 中序遍历 原题 [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

【题目】

```
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
```

这道题是说，定义一个二叉查找树为左子树的值全部小于根值，右子树的值全部大于根值。

【举例】

```

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

【思路】

这道题可以使用**中序遍历**的方式进行求解，首先设定一个最小值`inorder`，每次遍历，把最小值设为前一次遍历结果的根路径，如果当前遍历根值比前一次遍历根值小，那么就返回false。

- Time: O(n) 
- Space: O(1) 

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let queue = []
    let inorder = -Number.MAX_VALUE
    
    while (queue.length || root != null) {
        while (root != null) {
            queue.push(root)
            root = root.left
        }
        root = queue.pop()
        
        if (root.val <= inorder) return false
        inorder = root.val
        root = root.right
    }
    return true
};
```


<br>


#### 4. 广度遍历

