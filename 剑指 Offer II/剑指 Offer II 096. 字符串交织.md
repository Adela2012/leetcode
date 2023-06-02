# 剑指 Offer II 096. 字符串交织
给定三个字符串 s1、s2、s3，请判断 s3 能不能由 s1 和 s2 交织（交错） 组成。

两个字符串 s 和 t 交织 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：
```
s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
交织 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
```
提示：a + b 意味着字符串 a 和 b 连接。


![img](https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg){:width="561px", :height="203px"}

示例 1：


```
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true
```
示例 2：
```
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出：false
```
示例 3：
```
输入：s1 = "", s2 = "", s3 = ""
输出：true
```

提示：
```
0 <= s1.length, s2.length <= 100
0 <= s3.length <= 200
s1、s2、和 s3 都由小写英文字母组成
```

注意：本题与主站 97 题相同： https://leetcode-cn.com/problems/interleaving-string/



# 解题
## 解题1

使用官方例子，s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"，动态规划如表

-|''|d|b|b|c|a
:--:|:--:|:--:|:--:|:--|:--|:--
'' | true | false | false | false | false | false 
a | true | false | false | false | false | false 
a | true | true | true | true | true | false 
b | false | true | true | false | true | false 
c | false | false | true | true | true | true 
c | false | false | false | true | false | true

1. 首先判断s1和s2长度相加是否等于s3
2. 构建dp数组，dp[i][j]表示，s1前i个和s2前j个，能够构成s3前i+j个
3. 默认dp[0][0]时，即s1和s2空字符串时构成s3空字符串。初始化行列dp[i][0]和dp[0][j]
4. 递推dp[i][j]，取数组左向和上向的两种情况

```ts
function isInterleave(s1: string, s2: string, s3: string): boolean {
    let n1 = s1.length, n2 = s2.length, n3 = s3.length

    if (n1 + n2 != n3) return false
    const dp = new Array(n1+1).fill(0).map(() => new Array(n2+1).fill(false))
    dp[0][0] = true

    for (let i = 1; i <= n1; i++) {
        dp[i][0] = dp[i-1][0] && s1[i-1] == s3[i-1]
    }
    for (let j = 1; j <= n2; j++) {
        dp[0][j] = dp[0][j-1] && s2[j-1] == s3[j-1]
    }
    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            dp[i][j] = (dp[i][j-1] && s2[j-1] == s3[i+j-1]) || (dp[i-1][j] && s1[i-1] == s3[i+j-1])
        }
    }
    return dp[n1][n2]

};
```
- 时间复杂度：O(MN)，M = s1.lenght, N = s2.length
- 空间复杂度：O(MN)

## 解题2 

1. 一维数组动态替换二维数组。
2. 保证s1的长度大于s2的长度。

```js
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let n1 = s1.length, n2 = s2.length, n3 = s3.length
    if (n1 + n2 != n3) return false
    if (n1 < n2) return isInterleave(s2, s1, s3)

    const dp = new Array(n1+1).fill(false)
    dp[0] = true
    for (let j = 0; j < n2 && s2[j] == s3[j]; j++) {
        dp[j+1] = true
    }
    for (let i = 0; i < n1; i++) {
        dp[0] = dp[0] && (s1[i] == s3[i])
        for (let j = 0; j < n2; j++) {
            let c1 = s1[i], c2 = s2[j], c3 = s3[i+j+1]
            dp[j+1] = (dp[j+1] && c1 == c3 ) || (dp[j] && c2 == c3 )
        }
    }
    return dp[n2]
};
```
- 时间复杂度：O(MN)，M = s1.length, N = s2.length
- 空间复杂度：O(N)，N = Math.max(s1.length, s2.length) 