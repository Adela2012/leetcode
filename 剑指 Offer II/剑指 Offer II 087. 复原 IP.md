# 剑指 Offer II 087. 复原 IP 
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。

有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

 

示例 1：
```
输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
```
示例 2：
```
输入：s = "0000"
输出：["0.0.0.0"]
```
示例 3：
```
输入：s = "1111"
输出：["1.1.1.1"]
```
示例 4：
```
输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
```
示例 5：
```
输入：s = "10203040"
输出：["10.20.30.40","102.0.30.40","10.203.0.40"]
```

提示：
```
0 <= s.length <= 3000
s 仅由数字组成
```

注意：本题与主站 93 题相同：https://leetcode-cn.com/problems/restore-ip-addresses/ 

# 解题
1. 深度优先搜索，入参id为 IP 地址的四个整数下标，取值[0,1,2,3]，start为s的下标，
   1. 因此，当id为4或start为s长度时，不符合继续条件，返回。
   2. 同时，当id为4且start为s长度时，正好是有效 IP 地址，将tmp处理成字符串，并记录
2. 不能含有前导 0，因此当s的start下标为0时，此IP的id下标元素为0，并将id和start加1，继续递归
3. 从start开始，计算到end的可能性整数addr，如果在(0,255]之间，那么将此可能性加入tmp中，并将id和start加1，继续递归
```js
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const tmp = [], ans = []
    dfs(0, 0)
    return ans

    function dfs(id, start) {
        if (id == 4 || start == s.length) {
            if (id == 4 && start == s.length) {
                ans.push(tmp.join('.'))
            }
            return
        }
        if (s.charAt(start) === '0') {
            tmp[id] = 0
            dfs(id + 1, start + 1)
        }
        let addr = 0
        for (let end = start; end < s.length; end++) {
            addr = addr * 10 + (s.charAt(end) - 0)
            if (addr > 0 && addr <= 255) {
                tmp[id] = addr
                dfs(id+1, end+1)
            } else break
        }
    }
};
```
