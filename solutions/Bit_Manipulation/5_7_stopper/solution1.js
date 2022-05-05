const Bits = require('../../../datastructures/Bits/solution1');

module.exports = function PairwiseSwap(num) {
  const oddBitsMaskNum = 0XAAAAAAAA; // 10101010101010101010101010101010
  const numWithValidOddBits = num & oddBitsMaskNum;
  const rightShiftedNumWithOddBits = numWithValidOddBits >> 1;

  const evenBitsMaskNum = 0X55555555; // 01010101010101010101010101010101
  const numWithValidEvenBits = num & evenBitsMaskNum;
  const leftShiftedNumWithEvenBits = numWithValidEvenBits << 1;

  const res = rightShiftedNumWithOddBits | leftShiftedNumWithEvenBits;
  console.log('res = ', res);
  return res;
}