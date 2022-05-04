const Bits = require('../../../datastructures/Bits/solution1');
module.exports = function Conversion(numFrom, numTo) {
  const xorNum = numFrom ^ numTo;

  const xorBitsArray = Bits.printNumAsUnsignedBits(xorNum, 32);
  console.log('xorBitsArray = ', xorBitsArray);

  let res = 0;
  xorBitsArray.map(bit => bit === 1 ? res++ : 0);
  console.log('res = ', res);

  return res;
}