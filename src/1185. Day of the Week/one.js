/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  return new Date(`${year}-${month}-${day}`).toLocaleString('en-US', { weekday: 'long' })
};