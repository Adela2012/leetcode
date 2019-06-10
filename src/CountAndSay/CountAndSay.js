/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var arr = ["1"];
    for(var i = 1; i <= n; i++){
         arr[i] = need(arr[i-1]);
    }
    return arr[n - 1];
};
function need(str){
    str = str + '0';
    var j = 0;
    var res = ''; 
    for(var i = 1; i < str.length; i++) {
        if(str.charAt(i) != str.charAt(i-1)){
            j++;
            res += j + str.charAt(i-1);
            j = 0;
        } else {
            j++;
        }
    }
    return res;
}