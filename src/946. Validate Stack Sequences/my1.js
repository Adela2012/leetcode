/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    const stack = []
    let i, p = 0
    while(pushed.length && p < popped.length) {
        i = pushed.shift()
        if (stack[stack.length - 1] == popped[p]) {
            pushed.unshift(i)
            stack.pop()
            p++
        } else if (i != popped[p]) {
            stack.push(i)
        } else {
          p++
        }
    }
    
    while(stack.length &&  p < popped.length) {
        i = stack.pop()
        if (i == popped[p]) {
            p++
        } else {
            break
        }
    }
    return stack.length == 0
};