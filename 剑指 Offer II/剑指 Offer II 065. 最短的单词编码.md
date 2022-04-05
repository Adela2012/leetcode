# 剑指 Offer II 065. 最短的单词编码

单词数组 words 的 有效编码 由任意助记字符串 s 和下标数组 indices 组成，且满足：

words.length == indices.length
助记字符串 s 以 '#' 字符结尾
对于每个下标 indices[i] ，s 的一个从 indices[i] 开始、到下一个 '#' 字符结束（但不包括 '#'）的 子字符串 恰好与 words[i] 相等
给定一个单词数组 words ，返回成功对 words 进行编码的最小助记字符串 s 的长度 。

 

示例 1：
```
输入：words = ["time", "me", "bell"]
输出：10
解释：一组有效编码为 s = "time#bell#" 和 indices = [0, 2, 5] 。
words[0] = "time" ，s 开始于 indices[0] = 0 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
words[1] = "me" ，s 开始于 indices[1] = 2 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
words[2] = "bell" ，s 开始于 indices[2] = 5 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
示例 2：

输入：words = ["t"]
输出：2
解释：一组有效编码为 s = "t#" 和 indices = [0] 。
```

提示：
```
1 <= words.length <= 2000
1 <= words[i].length <= 7
words[i] 仅由小写字母组成
```

注意：本题与主站 820 题相同： https://leetcode-cn.com/problems/short-encoding-of-words/

# 解题

## 解题1
目的是寻找单词中，将后缀名相同的单词去除后，剩下的单词的长度加一的长度和。

1. 我们将words用set的方式存储，
2. 然后遍历每个单词，`for (const word of set)`
3. 将单词可能出现的后缀去除 `for (let i = 1; i < word.length; i++) set.delete(word.substring(i))`
4. 最后将去重后的set中的word长度加一累加
```js
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const set = new Set(words)
    for (const word of set) {
        for (let i = 1; i < word.length; i++) set.delete(word.substring(i))
    }
    let sum = 0
    for (const word of set) {
        sum += word.length + 1
    }
    return sum
};
```
- 时间复杂度：O(NK)，N = words.length，K = words[i].length
- 空间复杂度：O(N)


## 解题2
目的是寻找单词中，将后缀名相同的单词去除后，剩下的单词的长度加一的长度和。

可以将单词的顺序调换一下，例如time，变成emit，me变成me，这样就变成了前缀树，求解所有叶子节点的深度+1的和。

1. 遍历words，将word单词中的每个字母添加到children树中，node指针依次下指，
2. 当word遍历完后，记录count值，并将节点添加到set集合中
3. 遍历set集合，将除count外没有其他孩子的节点的count值累加
4. 最后返回累加和sum
```js
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const children = {}, set = new Set()

    for(const word of words) {
        let node = children
        for (let i = word.length - 1; i >= 0; i--) {
            const w = word[i]
            if (!node[w]) {
                node[w] = {}
            }
            node = node[w]
        }
        node.count = word.length + 1
        set.add(node)
    }
    
    let sum = 0
    for (const node of set) {
        if(Object.getOwnPropertyNames(node).length == 1) sum += node.count
    }
    return sum
};
```
