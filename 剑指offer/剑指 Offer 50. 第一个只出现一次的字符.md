# 剑指 Offer 50. 第一个只出现一次的字符
剑指 Offer 50. 第一个只出现一次的字符
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
```js
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    if (s == '') return ' '
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (map.has(char)) {
            let {count} = map.get(char)
            map.set(char, {index: i, count: count + 1})
        } else {
            map.set(char, {index: i, count: 1})
        }
    }
    let ix = s.length, res = " "
    map.forEach(i => {
        let {count, index} = i
        if (count == 1 && index < ix) {
            res = s[index]
            ix = index
        }
    })
    return res
};
```