# 剑指 Offer II 108. 单词演变

在字典（单词列表） wordList 中，从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：
```
序列中第一个单词是 beginWord 。
序列中最后一个单词是 endWord 。
每次转换只能改变一个字母。
转换过程中的中间单词必须是字典 wordList 中的单词。
给定两个长度相同但内容不同的单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。
```
 

示例 1：
```
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：5
解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
```
示例 2：
```
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
输出：0
解释：endWord "cog" 不在字典中，所以无法进行转换。
```

提示：
```
1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord、endWord 和 wordList[i] 由小写英文字母组成
beginWord != endWord
wordList 中的所有字符串 互不相同
```

注意：本题与主站 127 题相同： https://leetcode-cn.com/problems/word-ladder/



# 解题

## 解题2
```js
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const edge = [], wordMap = new Map(), Max = Number.MAX_SAFE_INTEGER
    let num = -1
    for (let word of wordList) {
        addEdge(word)
    }
    addEdge(beginWord)
    if (!wordMap.has(endWord)) return 0

    const beginId = wordMap.get(beginWord), endId = wordMap.get(endWord)
    const queue = [beginId], dis = new Array(num+1).fill(Max)
    dis[beginId] = 0
    while(queue.length) {
        const id = queue.shift()
        if (id == endId) {
            return (dis[endId] >> 1)+1
        }
        for (let i of edge[id]) {
            if (dis[i] == Max) {
                dis[i] = dis[id] + 1
                queue.push(i)
            }
        }
    }
    return 0


    function addEdge(word) {
        addWord(word)
        const id1 = wordMap.get(word)
        const wordArr = word.split('')
        for (let i = 0; i < wordArr.length; i++) {
            let tmp = wordArr[i]
            wordArr[i] = '*'
            const newWord = wordArr.join('')
            addWord(newWord)
            const id2 = wordMap.get(newWord)
            wordArr[i] = tmp
            edge[id1].push(id2)
            edge[id2].push(id1)
        }
    }

    function addWord(word) {
        if (wordMap.has(word)) return
        wordMap.set(word, ++num)
        edge[num] = []
    }
};
```