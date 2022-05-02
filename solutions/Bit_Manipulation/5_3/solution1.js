const Bits = require('../../../datastructures/Bits/solution1');
module.exports = function FlipBitToWin(num) {
  const bitsArray = Bits.printNumAsUnsignedBits(num, 32);
  console.log('bitsArray = ', bitsArray);

  let prev1s = 0;
  let cur1s = 0;
  let maxBitLen = 0;
  for (let i = 0; i < bitsArray.length; i++) {
    const elm = bitsArray[i];
    if (elm == 0 && bitsArray[i + 1] == 0) {
      prev1s = 0; 
      cur1s = 0;
    }
    if (elm == 1) {
      cur1s++;
    }
    // console.log('elm = ', elm);
    if (elm == 0 && bitsArray[i + 1] != 0) {
      // console.log('maxBitLen = ', maxBitLen, 'prev1s = ', prev1s, 'cur1s = ', cur1s);
      maxBitLen = Math.max(maxBitLen, prev1s + cur1s + 1);

      prev1s = cur1s;
      cur1s = 0;
    }

    maxBitLen = Math.max(maxBitLen, prev1s + cur1s + 1); // point1 - don't forget the end check
  }
  // console.log('maxBitLen = ', maxBitLen);
  return maxBitLen;
}