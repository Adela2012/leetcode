/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let n = heights.length
    if (n == 0) return 0
    if (n == 1) return heights[0]
    
    const left = Array(n).fill(-1), right = Array(n).fill(n)
    
    const stack = [], peek = () => stack[stack.length - 1]
    
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[peek()] >= heights[i]) {
            right[peek()] = i
            stack.pop()
        }
        if (stack.length > 0) left[i] = peek()
        stack.push(i)
    }
    
    let area = 0
    for (let i = 0; i < n; i++) {
        area = Math.max(area, (right[i] - left[i] - 1) * heights[i])
    }
    return area
};