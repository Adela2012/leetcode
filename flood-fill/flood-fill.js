/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  helper(image, sr, sc, newColor, image[sr][sc])
  return image
};

var helper = (image, sr, sc, newColor, initColor) => {
  if(image[sr][sc] === initColor && image[sr][sc] !== newColor) {
      image[sr][sc] = newColor
      if(sr < image.length - 1) helper(image, sr+1, sc, newColor, initColor)
      if(sc < image[0].length - 1) helper(image, sr, sc+1, newColor, initColor)
      if(sr > 0) helper(image, sr-1, sc, newColor, initColor)
      if(sc > 0) helper(image, sr, sc-1, newColor, initColor)
  }
}