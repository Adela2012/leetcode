/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var q = new Set(['q','w','e','r','t','y','u','i','o','p']);
    var a = new Set(['a','s','d','f','g','h','j','k','l']);
    var z = new Set(['z','x','c','v','b','n','m']);
    var res = [];
    for (var i = 0; i < words.length; i++) {
        var qi = 0, ai = 0, zi = 0,li = words[i].length;
        for(var j = 0; j < li; j++) {
           var sa = words[i].charAt(j).toLowerCase();
           if (q.has(sa)) qi++;
           if (a.has(sa)) ai++;
           if (z.has(sa)) zi++;          
        }
        if(qi == li || ai == li || zi == li) res.push(words[i]);
    }
    return res;
};