# 剑指 Offer II 033. 变位词组
给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。

注意：若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。

 

示例 1:
```
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
```
示例 2:
```
输入: strs = [""]
输出: [[""]]
```
示例 3:
```
输入: strs = ["a"]
输出: [["a"]]
```
 

提示：
```
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母
```
 

注意：本题与主站 49 题相同： https://leetcode-cn.com/problems/group-anagrams/

# 解题
1. 辅助函数h()返回新的字符串newStr，所有变位词的newStr都相同
   1. strs[i] 仅包含小写字母，可以通过一个26位数组来记录每个字母的个数
   2. 通过字母下标+数量的方式转化新的字符串newStr
2. 通过map记录相同的newStr对于的str，存放在map中
3. 最后遍历map的values，将数组推入结果数组res中
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map(), res = []
    for (let str of strs) {
        const newStr = h(str)
        map.has(newStr) ? map.get(newStr).push(str) : map.set(newStr, [str])
    }
    for (let val of map.values()) {
        res.push(val)
    }
    return res


    function h(str) {
        let arr = new Array(26).fill(0), res = ''
        for (let s of str) {
            arr[s.charCodeAt() - 'a'.charCodeAt()]++ 
        }
        for (let i in arr) {
            res += `-${i}${arr[i]}`
        }
        return res
    }
};
```
N为strs的长度，M为strs[i]的长度
- 时间复杂度O(NM)
- 空间复杂度O(N)


## 解题2
换种解法
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for (let str of strs) {
        const newStr = h(str)
        map.has(newStr) ?
            map.get(newStr).push(str) :
            map.set(newStr, [str])
    }
    return [...map.values()]

    function h(str) {
        const arr = new Array(26).fill(0)
        for (let i = 0; i < str.length; i++) {
            const index = str.charCodeAt(i) - 'a'.charCodeAt()
            arr[index]++
        }
        return arr.join(',')
    }
};
```