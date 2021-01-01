/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const N = heights.length
    let maxArea = 0
    for (let i = 0; i < N; ++i) {
        let h = heights[i]
        let left = i - 1, right = i + 1
        while (left >= 0 && heights[left] >= h) {left--}
        while (right < N && heights[right] >= h) {right++}
        let area = h * (right - left - 1)
        if (maxArea < area) maxArea = area
    }
    return maxArea
};