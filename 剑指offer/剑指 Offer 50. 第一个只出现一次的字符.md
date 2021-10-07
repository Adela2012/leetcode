# 剑指 Offer 50. 第一个只出现一次的字符

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例:

```
s = "abaccdeff"
返回 "b"

s = "" 
返回 " "
 ```

限制：

```
0 <= s 的长度 <= 50000
```

# 解题
使用map来记录每个字母出现的次数，在迭代map，找出第一个只出现一次的字母。
（Map 中的 key 是有序的。因此，当迭代的时候，一个 Map 对象以插入的顺序返回键值。）
```js
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    if (s == '') return ' '
    let map = new Map()
    for(let c of s) {
        if (map.has(c)) map.set(c, map.get(c)+1)
        else map.set(c, 1)
    }
    for (let [key, val] of map.entries()) {
        if (val == 1) return key
    }
    return ' '
};
```
- 时间复杂度： O(N)，N是字符串 s 的长度
- 空间复杂度：O(∣Σ∣)，其中 Σ 是字符集，s 只包含小写字母，因此 ∣Σ∣≤26。需要O(∣Σ∣)的空间存储哈希映射。

