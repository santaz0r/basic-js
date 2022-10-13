const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.aplphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  toCypher(message, key, encrypt = true) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    } else {
      message = message.toUpperCase().split("");
      const ALPHA = this.aplphabet.split("");
      const messageArr = [];
      message.forEach((i) => {
        if (ALPHA.includes(i) || i === " ") messageArr.push(i);
      });
      const newMessage = messageArr.join("");

      const keyArr = key
        .repeat(Math.ceil(message.length / key.length))
        .toUpperCase()
        .split("");

      messageArr.forEach((i, index) => {
        if (i === " ") keyArr.splice(index, 0, " ");
      });
      const newKey = keyArr.join("");
      const encryptMsg = [];
      for (let i = 0; i < newMessage.length; i++) {
        let indexChar = 0;
        if (encrypt) {
          indexChar =
            ALPHA.findIndex((j) => j === newMessage[i]) === -1
              ? undefined
              : (ALPHA.findIndex((j) => j === newMessage[i]) +
                  ALPHA.findIndex((j) => j === newKey[i])) %
                26;
        } else {
          indexChar =
            ALPHA.findIndex((j) => j === newMessage[i]) === -1
              ? undefined
              : (ALPHA.findIndex((j) => j === newMessage[i]) -
                  ALPHA.findIndex((j) => j === newKey[i])) %
                26;

          indexChar < 0 ? (indexChar = 26 - Math.abs(indexChar)) : indexChar;
        }

        const char = this.aplphabet[indexChar];
        encryptMsg.push(char);
      }

      const res = encryptMsg.join("").split("");
      message.forEach((i, index) => {
        if (!ALPHA.includes(i)) res.splice(index, 0, i);
      });

      return this.direct ? res.join("") : res.reverse().join("");
    }
  }
  encrypt(message, key) {
    return this.toCypher(message, key);
  }
  decrypt(message, key) {
    return this.toCypher(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
