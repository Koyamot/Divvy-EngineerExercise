const RomanTest = str => {
  var regexStr = str.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g)
  var i
  var result = ''
  var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
  for (i in regexStr) {
    var newNum = regexStr[i]
    if (!isNaN(regexStr[i])) {
      var num = Number(newNum)
      for (var x in lookup) {
        while (num >= lookup[x]) {
          result += x
          num -= lookup[x]
        }
      }
    } else {
      result += newNum
    }
  }

  return result
}

export default RomanTest
