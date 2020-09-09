const assert = require('assert')
const FizzBuzzGame = require('../src/index.js')

describe('Game', () => {
  describe('FizzBuzz', () => {
    const testData = {
      1: '1',
      2: '2',
      3: 'Fizz',
      5: 'Buzz',
      6: 'Fizz',
      9: 'Fizz',
      10: 'Buzz',
      15: 'FizzBuzz',
      30: 'FizzBuzz'
    }

    // generate test case template from test data
    Object
      .entries(testData)
      .forEach(([input, expectedSay]) => {
        it(`When Say ${input}, should be ${expectedSay}`, () => {
          // Arrange
          const sayMessagesObj = [{
            modNumber: 15,
            message: 'FizzBuzz'
          },
          {
            modNumber: 3,
            message: 'Fizz'
          },
          {
            modNumber: 5,
            message: 'Buzz'
          }
          ]

          // Act
          const fizzBuzzGame = new FizzBuzzGame(sayMessagesObj)
          const actualSay = fizzBuzzGame.Say(input)

          // Assert
          assert.equal(actualSay, expectedSay)
        })
      })
  })
})
