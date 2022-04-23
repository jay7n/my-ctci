const { Stack } = require('../Stack/solution1');
module.exports = {
  printNumAsNBits(num, n = 4) {
    if (num == 0) {
      return new Array(n).fill(0).join('');
    }

    let st = new Stack;
    let quotient = num;
    let remainder;

    if (num > 0) {
    // for positive numbers

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

      let idx = res.length;
      while (idx-4 > 0) {
        idx -= 4;
        res.splice(idx, 0, ' ');
      }

      // console.log('res = ', res.join(''));
      return res.join('');

    } else {
    // for negative numbers


    }
  }
}