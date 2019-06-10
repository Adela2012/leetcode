/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let set = new Set()
  
  emails.forEach(i => {
      let localName = i.substr(0, i.indexOf('@'))
      localName.indexOf('+') != -1 && (localName = localName.substr(0, localName.indexOf('+')))
      localName = localName.replace(/\./g, '')
      let domainName = i.substr(i.indexOf('@')+1)
      set.add(`${localName}@${domainName}`)
  })
  return set.size
};

// 72 ms	39 MB