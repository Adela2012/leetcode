/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  if (start > destination) {
    let t = start
    start = destination
    destination = t
  }
  let a = 0, b = 0
  for (let i = 0; i < distance.length; i++) {
    if (i < destination && i >= start) {
      a += distance[i]
    } else {
      b += distance[i]
    }
  }
  return Math.min(a, b)
};