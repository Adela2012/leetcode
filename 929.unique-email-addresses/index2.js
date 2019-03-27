/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let count = 0
  let set = new Set()
  
  emails.forEach(i => {
      let address = i.split('@')
      let localName = address[0].split('+')[0].replace(/\./g, '')
      let domainName = address[1]
      set.add(`${localName}@${domainName}`)
  })
  return set.size
};

// 84 ms	40.9 MB