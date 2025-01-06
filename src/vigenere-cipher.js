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
  encrypt(text, key) {
    const alphabet = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
    };

    const reverseApphabet = {
      0: "a",
      1: "b",
      2: "c",
      3: "d",
      4: "e",
      5: "f",
      6: "g",
      7: "h",
      8: "i",
      9: "j",
      10: "k",
      11: "l",
      12: "m",
      13: "n",
      14: "o",
      15: "p",
      16: "q",
      17: "r",
      18: "s",
      19: "t",
      20: "u",
      21: "v",
      22: "w",
      23: "x",
      24: "y",
      25: "z",
    };
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
    const textArr = text.toLowerCase().split("");
    const keyArr = key.toLowerCase().split("");
    const indexesArray = [];
    const keyIndexArr = [];
    textArr.map((e) => {
      if (alphabet[e] >= 0) {
        indexesArray.push(alphabet[e]);
      } else {
        indexesArray.push(e);
      }
    });

    keyArr.map((e) => {
      if (alphabet[e] >= 0) {
        keyIndexArr.push(alphabet[e]);
      }
    });

    const keyIndexNewArr = [];

    for (let i = 0; i < indexesArray.length; i += 1) {
      if (Number.isInteger(indexesArray[i])) {
        keyIndexNewArr.push(keyIndexArr[0]);
        keyIndexArr.push(keyIndexArr.shift());
      } else {
        keyIndexNewArr.push(indexesArray[i]);
      }
    }

    const resultArr = [];

    indexesArray.map((e, index) => {
      if (Number.isInteger(indexesArray[index])) {
        const finalIndex = (indexesArray[index] + keyIndexNewArr[index]) % 26;
        resultArr.push(reverseApphabet[finalIndex]);
      } else {
        resultArr.push(indexesArray[index]);
      }
    });

    const result = resultArr.join("").toUpperCase();
    return result;
  }
  decrypt(text, key) {
    const alphabet = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
    };

    const reverseApphabet = {
      0: "a",
      1: "b",
      2: "c",
      3: "d",
      4: "e",
      5: "f",
      6: "g",
      7: "h",
      8: "i",
      9: "j",
      10: "k",
      11: "l",
      12: "m",
      13: "n",
      14: "o",
      15: "p",
      16: "q",
      17: "r",
      18: "s",
      19: "t",
      20: "u",
      21: "v",
      22: "w",
      23: "x",
      24: "y",
      25: "z",
    };
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
    const textArr = text.toLowerCase().split("");
    const keyArr = key.toLowerCase().split("");
    const indexesArray = [];
    const keyIndexArr = [];
    textArr.map((e) => {
      if (alphabet[e] >= 0) {
        indexesArray.push(alphabet[e]);
      } else {
        indexesArray.push(e);
      }
    });

    keyArr.map((e) => {
      if (alphabet[e] >= 0) {
        keyIndexArr.push(alphabet[e]);
      }
    });

    const keyIndexNewArr = [];

    for (let i = 0; i < indexesArray.length; i += 1) {
      if (Number.isInteger(indexesArray[i])) {
        keyIndexNewArr.push(keyIndexArr[0]);
        keyIndexArr.push(keyIndexArr.shift());
      } else {
        keyIndexNewArr.push(indexesArray[i]);
      }
    }

    const resultArr = [];

    indexesArray.map((e, index) => {
      if (Number.isInteger(indexesArray[index])) {
        let finalIndex = indexesArray[index] - keyIndexNewArr[index];
        if (finalIndex < 0) {
          finalIndex += 26;
        }
        resultArr.push(reverseApphabet[finalIndex]);
      } else {
        resultArr.push(indexesArray[index]);
      }
    });

    const result = resultArr.join("").toUpperCase();
    return result;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine,
};
