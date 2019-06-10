/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var o = {"I": 1 , "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M":1000};
    var res = 0;
    for(var i = 0; i < s.length; i++) {
      if(i == 0 || o[s.charAt(i)] <= o[s.charAt(i - 1)])   
          res += o[s.charAt(i)];
        else
            res += o[s.charAt(i)] - 2 * o[s.charAt(i - 1)];
    }
    return res;

};