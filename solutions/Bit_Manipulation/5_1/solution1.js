const Bits = require('../../../datastructures/Bits/solution1');

module.exports = function Insertion(N, M, i, j) {
  const mask = makeMaskV1(i, j);
  console.log('mask = ', mask, Bits.printNumAsUnsignedBits(mask, 32).join());

  const N_cleared = N & ~mask;
  console.log('N = ', N, Bits.printNumAsUnsignedBits(N, 32).join());
  console.log('N_cleared = ', N_cleared, Bits.printNumAsUnsignedBits(N_cleared, 32).join());

  const M_shifted = M << i;
  console.log('fuck = ', M);
  console.log('M = ', M, Bits.printNumAsUnsignedBits(M, 32)).join();
  console.log('M_shifted = ', M_shifted, Bits.printNumAsUnsignedBits(M_shifted, 32)).join();

  const res = M_shifted | N_cleared;
  console.log('res = ', res);
  // console.log('res = ', Bits.printNumAsNBitWithPositive(res, 32).join());
}

function makeMaskV1(i, j) {
  let res = 0;  
  for (let cur = i; cur <= j; cur++) {
    res += Math.pow(2, cur - i);
  }
  res = res << i;
  return res;
}