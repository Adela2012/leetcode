/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTH_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var dayOfTheWeek = function (day, month, year) {
  let sum = (year - 1) * 365 + day + Math.floor((month > 2 ? year : year - 1) / 4) - Math.floor(year / 100) + Math.floor(year / 400)
  for (let i = 0; i < month; ++i) sum += MONTH_DAYS[i]
  return LIST[sum % 7]
};