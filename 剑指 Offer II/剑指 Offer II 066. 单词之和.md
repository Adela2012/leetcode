# 剑指 Offer II 066. 单词之和

实现一个 MapSum 类，支持两个方法，insert 和 sum：

MapSum() 初始化 MapSum 对象
void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键 key 已经存在，那么原来的键值对将被替代成新的键值对。
int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。
 

示例：
```
输入：
inputs = ["MapSum", "insert", "sum", "insert", "sum"]
inputs = [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
输出：
[null, null, 3, null, 5]

解释：
MapSum mapSum = new MapSum();
mapSum.insert("apple", 3);  
mapSum.sum("ap");           // return 3 (apple = 3)
mapSum.insert("app", 2);    
mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)
```

提示：
```
1 <= key.length, prefix.length <= 50
key 和 prefix 仅由小写英文字母组成
1 <= val <= 1000
最多调用 50 次 insert 和 sum
```

注意：本题与主站 677 题相同： https://leetcode-cn.com/problems/map-sum-pairs/



# 解题
## 解题1 
1. 采用map记录所有插入的单词和数字，
2. 在sum求和操作中，将prefix与map中的单词逐个比价前缀是否相等，
3. 相等则和相加，最后返回和。
```js
/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.map.set(key, val)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0
    for (const [key, val] of this.map) {
        if (key.startsWith(prefix)) {
            sum += val
        }
    }
    return sum
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
```
## 解题2
1. 每次插入时，生成前缀树，并将值记录下来，
2. 每次求和时，逐字获取到前缀的所在节点对象，
3. 遍历对象值，当值为数字时，相加；当值为对象时，继续遍历这个对象，
4. 最后返回改节点上的所有数字和。
```js
/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.dict = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let p = this.dict
    for (const k of key) {
        if (!p[k]) p[k] = {}
        p = p[k]
    }
    p.val = val
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0, p = this.dict
    for (const c of prefix) {
        p = p[c] ? p[c] : {}
    }
    dfs(p)
    return sum

    function dfs(obj) {
        for (const key in obj) {
            const value = obj[key]
            if (typeof value === 'number') {
                sum += value
            }
            if (typeof value === 'object') {
                dfs(obj[key])
            }
        }
    }
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
```
