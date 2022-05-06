const Bits = require('../../../datastructures/Bits/solution1');

module.exports = function DrawLine(screenBytes, width, x1, x2, y) {
  const height = screenBytes.byteLength * 8 / width;
  const u8 = new Uint8Array(screenBytes);
}

function drawLineInOneByte(start, end) {
  if (start > end) {
    let tmp = start;
    start = end;
    end = tmp;
  }
  start = Math.max(Math.min(8, start), 0);
  end = Math.max(Math.min(8, end), 0);

  const len = end - start + 1;
  const bitArray = new Array(len).fill(1);
  let num = Bits.printBitsAsUnsignedNum(bitArray);
  num = num << (7 - end);

  console.log('drawLineInOneByte start = ', start, 'end = ', end, 'num = ', num, 'res = ', Bits.printNumAsUnsignedBits(num, 8).join(''));

  return num;
}