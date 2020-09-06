const assert = require('assert')
const FizzBuzzGame = require('../src/index.js')

describe('FizzBuzz Game', () => {
    describe('Say', () => {
        const testData = [{
                'expectedResult': '1',
                'input': 1,
            },
            {
                'expectedResult': '2',
                'input': 2,
            },
            {
                'expectedResult': 'Fizz',
                'input': 3,
            },
            {
                'expectedResult': 'Buzz',
                'input': 5,
            },
            {
                'expectedResult': 'Fizz',
                'input': 6,
            },
            {
                'expectedResult': 'Fizz',
                'input': 9,
            },
            {
                'expectedResult': 'Buzz',
                'input': 10,
            },
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