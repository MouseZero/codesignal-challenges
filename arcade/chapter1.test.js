const {centuryFromYear, checkPalindrome} = require('./chapter1')
const {expect} = require('chai')

describe('chapter 1', () => {
  describe('centuryFromYear', ()  => {
    it ('returns 20 for 1905', () => {
      expect(centuryFromYear(1905)).to.equal(20)
    })

    it ('returns 17 for 1700', () => {
      expect(centuryFromYear(1700)).to.equal(17)
    })
  })

  describe('checkPalindrome', () => {
    it ('finds palendrom for even chars', () => {
      expect(checkPalindrome('jijjij')).to.equal(true)
    })

    it ('finds palendrom for odd chars', () => {
      expect(checkPalindrome('wfcfw'), () => {
        expect(checkPalindrome('wfcfw')).to.equal(true)
      })
    })

    it ('finds non palendrom with even chars', () => {
      expect(checkPalindrome('asjssa')).to.equal(false)
    })
  })
})