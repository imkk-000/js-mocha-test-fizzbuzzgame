module.exports = class {
    #modNumbers
    #sayMessages

    constructor(modNumbers, sayMessages) {
        this.#modNumbers = modNumbers
        this.#sayMessages = sayMessages
    }

    #isMod(number, modNumber) {
        return number % modNumber == 0
    }

    Say(number) {
        for (let i = 0; i < this.#modNumbers.length; i++) {
            const modNumber = this.#modNumbers[i]
            if (this.#isMod(number, modNumber)) {
                return this.#sayMessages[modNumber]
            }
        }
        return number.toString()
    }
}