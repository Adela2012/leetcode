/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0
    for(let i = 0; i < heights.length; i++) {
        let h = heights[i]
        for (let j = i; j < heights.length; j++) {
            if (heights[j] < h) h = heights[j]
            let area = (j - i + 1) * h
            if (area > maxArea) maxArea = area
        }
    }
    return maxArea
};