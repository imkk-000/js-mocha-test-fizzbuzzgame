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
            30: 'FizzBuzz',
        }

        // generate test case template from test data
        Object
            .entries(testData)
            .forEach(([input, expectedSay]) => {
                it(`When Say ${input}, should be ${expectedSay}`, () => {
                    // Arrange
                    const modNumbers = [15, 3, 5]
                    const sayMessages = {
                        15: 'FizzBuzz',
                        3: 'Fizz',
                        5: 'Buzz',
                    }

                    // Act
                    const fizzBuzzGame = new FizzBuzzGame(modNumbers, sayMessages)
                    const actualSay = fizzBuzzGame.Say(input)

                    // Assert
                    assert.equal(actualSay, expectedSay)
                })
            })
    })
})