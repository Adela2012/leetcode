/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let n = Math.ceil(s.length / k); 
    let res = '';
    for (let i = 0; i < n; i++) {
        let cur;
        if(i % 2 == 0)  cur = s.substr(i*k, k).split('').reverse().join('');
        else cur = s.substr(i*k, k);
        res += cur;
    }
    res += s.substr(n*k);
    return res;
};
