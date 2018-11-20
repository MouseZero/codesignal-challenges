function centuryFromYear (year) {
  return Math.ceil(year / 100)
}

function checkPalindrome(inputString) {
  for (let i = 0; i<inputString.length/2; i++) {
    const k = inputString.length - 1 - i
    if (inputString.charAt(k) !== inputString.charAt(i)) return false
  }
  return true
}

module.exports = {
  centuryFromYear,
  checkPalindrome
}
