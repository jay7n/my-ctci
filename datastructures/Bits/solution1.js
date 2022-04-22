const { Stack } = require('../Stack/solution1');
module.exports = {
  printNumAs4Bits(num) {
    if (num == 0) {
      return '0';
    }

    let st = new Stack;
    let quotient = num;
    let remainder;

    if (num > 0) {
      while (quotient > 0) {
        remainder = quotient % 2;
        quotient = Math.floor(quotient / 2);
        console.log('q = ', quotient, 'r = ', remainder);
        st.push(remainder);
      }
      const res = st.popToArray().join('');
      console.log('res = ', res);
    }
  }
}