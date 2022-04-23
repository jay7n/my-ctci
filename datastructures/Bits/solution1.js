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
    // res..splice(0, 1);

    res

  }
}