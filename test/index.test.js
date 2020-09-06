const assert = require('assert')
const FizzBuzzGame = require('../src/index.js')

describe('FizzBuzz Game', () => {
    it('Say 1 should be 1', () => {
        // Arrange
        const expectedSay = '1'

        // Act
        const fizzBuzzGame = new FizzBuzzGame()
        const actualSay = fizzBuzzGame.Say(1)

        // Assert
        assert.equal(actualSay, expectedSay)
    })
    it('Say 3 should be Fizz', () => {
        // Arrange
        const expectedSay = 'Fizz'

        // Act
        const fizzBuzzGame = new FizzBuzzGame()
        const actualSay = fizzBuzzGame.Say(3)

        // Assert
        assert.equal(actualSay, expectedSay)
    })

    it('Say 5 should be Buzz', () => {
        // Arrange
        const expectedSay = 'Buzz'

        // Act
        const fizzBuzzGame = new FizzBuzzGame()
        const actualSay = fizzBuzzGame.Say(5)

        // Assert
        assert.equal(actualSay, expectedSay)
    })
})