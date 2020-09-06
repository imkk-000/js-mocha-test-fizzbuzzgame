module.exports = class {
    Say(number) {
        const modNumbers = [15, 3, 5]
        const sayMessages = {
            15: 'FizzBuzz',
            3: 'Fizz',
            5: 'Buzz',
        }
        for (let i = 0; i < modNumbers.length; i++) {
            const modNumber = modNumbers[i]
            if (number % modNumber == 0) {
                return sayMessages[modNumber]
            }
        }
        return number.toString()
    }
}