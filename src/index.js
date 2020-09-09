module.exports = class {
  #modNumbers
  #sayMessages

  constructor (sayMessagesObj) {
    this.#modNumbers = sayMessagesObj.map(({ modNumber }) => modNumber)
    this.#sayMessages = {}
    sayMessagesObj.forEach(({ modNumber, message }) => {
      this.#sayMessages[modNumber] = message
    })
  }

  #isMod (number, modNumber) {
    return number % modNumber === 0
  }

  Say (number) {
    for (let i = 0; i < this.#modNumbers.length; i++) {
      const modNumber = this.#modNumbers[i]
      if (this.#isMod(number, modNumber)) {
        return this.#sayMessages[modNumber]
      }
    }
    return number.toString()
  }
}
