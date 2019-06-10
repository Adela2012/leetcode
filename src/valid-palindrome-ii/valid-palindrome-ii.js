/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s.charAt(left) == s.charAt(right)) {
            left++;right--;
        } 
        else return isPalindrome(s,left,right-1) || isPalindrome(s,left+1,right);
    }
    return true;
};

var isPalindrome = function(s, l, r) {
    while(l < r) {
        if(s.charAt(l) == s.charAt(r)) {
            l++; r--;
        }
        else return false;
    }
    return true;
}