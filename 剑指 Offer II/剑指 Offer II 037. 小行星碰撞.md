# 剑指 Offer II 037. 小行星碰撞
给定一个整数数组 asteroids，表示在同一行的小行星。

对于数组中的每一个元素，其绝对值表示小行星的大小，正负表示小行星的移动方向（正表示向右移动，负表示向左移动）。每一颗小行星以相同的速度移动。

找出碰撞后剩下的所有小行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

 

示例 1：
```
输入：asteroids = [5,10,-5]
输出：[5,10]
解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。
```
示例 2：
```
输入：asteroids = [8,-8]
输出：[]
解释：8 和 -8 碰撞后，两者都发生爆炸。
```
示例 3：
```
输入：asteroids = [10,2,-5]
输出：[10]
解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。
```
示例 4：
```
输入：asteroids = [-2,-1,1,2]
输出：[-2,-1,1,2]
解释：-2 和 -1 向左移动，而 1 和 2 向右移动。 由于移动方向相同的行星不会发生碰撞，所以最终没有行星发生碰撞。 
```

提示：
```
2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
```

注意：本题与主站 735 题相同： https://leetcode-cn.com/problems/asteroid-collision/



# 解题
1. 按照提议，我们需要将几种元素入栈出栈的情况考虑到位。
2. 入栈情况：
   1. 栈为空时，`stack.length == 0`
   3. 栈顶元素小于0时，`stack[stack.length - 1] < 0`
   4. 当前元素大于0时，`asteroids[i] > 0`
3. 入栈完成，i指向下个元素。`i++;`
4. 出栈情况：
   1. 栈顶元素小于当前元素绝对值，销毁栈顶元素，`stack.pop();`
   2. 栈顶元素等于当前元素绝对值，销毁栈顶元素和当前元素，`stack.pop();i++;`
   3. 栈顶元素大于当前元素绝对值，销毁当前元素，`i++;`
```js
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = []
    let i = 0
    while(i < asteroids.length) {
        const len = stack.length
        if (len == 0 || asteroids[i] > 0 || stack[len - 1] < 0) {
            stack.push(asteroids[i])
        } else if (stack[len-1] <= -asteroids[i] ) {
            if(stack.pop() < -asteroids[i]) {
                continue
            }
        }
        i++
    }
    return stack
};
```
- 时间复杂度O(N)，需要遍历asteroids中的每个元素
- 空间复杂度O(N)，栈所占用空间。除答案stack以外，空间复杂度为O(1)。