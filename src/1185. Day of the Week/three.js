/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfTheWeek = function (day, month, year) {
  if (month < 3) {
    --year
    month += 12
  }

  const count = Math.floor(year / 100)
  year %= 100

  const week = (year + Math.floor(year / 4) + Math.floor(count / 4) - 2 * count + Math.floor((26 * (month + 1)) / 10) + day - 1) % 7
  return LIST[(week + 7) % 7]
};