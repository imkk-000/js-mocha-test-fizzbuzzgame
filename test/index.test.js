const assert = require('assert')
const FizzBuzzGame = require('../src/index.js')

describe('FizzBuzz Game', () => {
    describe('Say', () => {
        const testData = [{
                'expectedResult': '1',
                'input': 1,
            },
            {
                'expectedResult': 'Fizz',
                'input': 3,
            },
            {
                'expectedResult': 'Buzz',
                'input': 5,
            }
        ]
        testData.forEach(({
            expectedResult,
            input
        }) => {
            it(`${input} should be ${expectedResult}`, () => {
                // Arrange
                const expectedSay = expectedResult

                // Act
                const fizzBuzzGame = new FizzBuzzGame()
                const actualSay = fizzBuzzGame.Say(input)

                // Assert
                assert.equal(actualSay, expectedSay)
            })
        })
    })
})