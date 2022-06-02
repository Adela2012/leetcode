#  剑指 Offer II 114. 外星文字典
现有一种使用英语字母的外星文语言，这门语言的字母顺序与英语顺序不同。

给定一个字符串列表 words ，作为这门语言的词典，words 中的字符串已经 按这门新语言的字母顺序进行了排序 。

请你根据该词典还原出此语言中已知的字母顺序，并 按字母递增顺序 排列。若不存在合法字母顺序，返回 "" 。若存在多种可能的合法字母顺序，返回其中 任意一种 顺序即可。

字符串 s 字典顺序小于 字符串 t 有两种情况：

在第一个不同字母处，如果 s 中的字母在这门外星语言的字母顺序中位于 t 中字母之前，那么 s 的字典顺序小于 t 。
如果前面 min(s.length, t.length) 字母都相同，那么 s.length < t.length 时，s 的字典顺序也小于 t 。
 

示例 1：
```
输入：words = ["wrt","wrf","er","ett","rftt"]
输出："wertf"
```
示例 2：
```
输入：words = ["z","x"]
输出："zx"
```
示例 3：
```
输入：words = ["z","x","z"]
输出：""
解释：不存在合法字母顺序，因此返回 "" 。
```

提示：
```
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] 仅由小写英文字母组成
```

注意：本题与主站 269 题相同： https://leetcode-cn.com/problems/alien-dictionary/



# 解题
## 解题1
```js
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const edges = {}, states = {}, ans = []
    const VISITING = 1, VISITED = 2
    let valid = true
    for (let word of words) {
        for (let i = 0; i < word.length; i++) {
            const w = word[i]
            if (!edges[w]) edges[w] = []
        }
    }
    for (let i = 1; i < words.length && valid; i++) {
        addEdges(words[i-1], words[i])
    }

    if (!valid) return ''

    for (let u in edges) {
        if (!states[u]) {
            dfs(u)
        }
    }

    if (!valid) return ''

    return ans.join('')

    function dfs(u) {
        states[u] = VISITING
        const list = edges[u]
        for (let i of list) {
            if (!states[i]) {
                dfs(i)
                if(!valid) return
            } else if (states[i] == VISITING) {
                valid = false
                return
            }
        }
        states[u] = VISITED
        ans.unshift(u)

    }



    function addEdges(before, after) {
        const len1 = before.length, len2 = after.length
        const len = Math.min(len1, len2)
        let index = 0
        while(index < len) {
            const c1 = before[index], c2 = after[index]
            if (c1 !== c2) {
                edges[c1].push(c2)
                break
            }
            index++
        }
        if (index == len && len1 > len2) {
            valid = false
        }
    }
};
```

## 解题2
```js
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const map = new Map(), indep = {}, queue = [], ans = []
    let valid = true
    for (let word of words) {
        for (let w = 0; w < word.length; w++ ) {
            const c = word[w]
            if (!map.has(c)) {
                map.set(c, [])
                indep[c] = 0
            }
        }
    }

    for (let i = 1; i < words.length && valid; i++) {
        add(words[i-1], words[i])
    }


    if (valid == false) return ""
    
    for (const key in indep) {
        if (indep[key] == 0) queue.push(key)
    }

    while(queue.length) {
        const u = queue.shift()
        ans.push(u)
        const list = map.get(u)
        for (let i of list) {
            indep[i]--
            if (indep[i] == 0) {
                queue.push(i)
            }
        }
    }
    return ans.length == map.size ? ans.join('') : ''


    function add(before, after) {
        const len1 = before.length, len2 = after.length
        const len = Math.min(len1, len2) 
        let index = 0
        while(index < len) {
            const c1 = before[index], c2 = after[index]
            if (c1 !== c2) {
                map.get(c1).push(c2)
                indep[c2]++
                break
            }
            index++
        }
        if (index == len && len1 > len2) {
            valid = false
        }
    }
};
```