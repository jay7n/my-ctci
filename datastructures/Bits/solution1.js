const { Stack } = require('../Stack/solution1');
module.exports = {
  printNumAsNBits(num, n = 4) {
    if (num == 0) {
      return new Array(n).fill(0).join('');
    }

    let res;
    if (num > 0) {
    // for positive numbers
      res = this.printNumAsNBitWithPositive(num, n);
    } else {
    // for negative numbers (two's component)
      res = this.printNumAsNBitWithNegative(num, n);
    }

    let idx = res.length;
    while (idx - 4 > 0) {
      idx -= 4;
      res.splice(idx, 0, ' ');
    }

    // console.log('res = ', res.join(''));
    return res.join('');
  },

  printNumAsNBitWithPositive(num, n = 4) {
    let st = new Stack;
    let quotient = num;
    let remainder;

    while (quotient > 0) {
      remainder = quotient % 2;
      quotient = Math.floor(quotient / 2);
      // console.log('q = ', quotient, 'r = ', remainder);
      st.push(remainder);
    }

    let extraDigits = n - st.listSize;
    while (extraDigits > 0) {
      st.push(0);
      extraDigits--;
    }

    let res = st.popToArray();

    if (res.length - n > 0) {
      res = res.splice(res.length - n, num);
    }

    return res;
  },

  printNumAsNBitWithNegative(num, n = 4) {
    let res = this.printNumAsNBitWithPositive(Math.abs(num));
    res.splice(0, 1);

    // flip each bit
    res = res.map(elm => elm === 0 ? 1 : 0);

    // add 1 then
    let idx = res.length - 1;
    res[idx] += 1;
    if (res[idx] == 2) {
      res[idx] = 0;
      let carry = 1;
      while (--idx >= 0) {
        res[idx] = res[idx] + carry;
        if (res[idx] == 2) {
          res[idx] = 0;
          carry = 1;
        } else {
          break;
        }
      }
    }

    // add neg sign at start bit
    res.splice(0, 0, '1');

    console.log('neg res = ', res);
    return res;
  },

  printNBitsAsNum(bitStr, n) {
    let res;
    const bitArray = bitStr.split('').map(elm => parseInt(elm));
    if (bitArray.filter(elm => elm > 1).length > 0) {
      return null;
    }

    if (n == null) n = bitArray.length;

    if (bitArray[0] === 0) {
      res = this.printNumAsNBitWithPositive(bitArray, n);
    } else {
      res = this.printNumAsNBitWithNegative(bitArray, n);
    }

    return res;
  },

  printNBitsAsNumWithPositive(bitArray) {
    let res = 0;
    for (let i = bitStr.length - 1; i >= 0; i--) {
      bit
    }
  },

  printNBitsAsNumWithNegative(bitArray) {

  }
}