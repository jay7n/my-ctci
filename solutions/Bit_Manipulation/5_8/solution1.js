const Bits = require('../../../datastructures/Bits/solution1');

module.exports = function DrawLine(screenBytes, pixelWidth, x1, x2, y) {
  const byteWidth = pixelWidth / 8;
  const height = screenBytes.byteLength / byteWidth;
  y = clamp(y, 0, height - 1);
  x1 = clamp(x1, 0, pixelWidth - 1);
  x2 = clamp(x2, 0, pixelWidth - 1);

  const u8a = new Uint8Array(screenBytes);
  const startByteOffsetIdx = byteWidth * y + Math.floor(x1 / 8);
  const startBitIdxInByte = x1 % 8;
  const endByteOffsetIdx = byteWidth * y + Math.floor(x2 / 8);
  const endBitIdxInByte = x2 % 8;

  if ( endByteOffsetIdx === startByteOffsetIdx) {
    const num = drawLineInOneByte(8 - startBitIdxInByte, endBitIdxInByte);
    u8a.set([num], startByteOffsetIdx + 1);
  } else {
    const s = endByteOffsetIdx - startBitIdxInByte;
  }

  drawLineInOneByte(8 - );
}

function clamp(value, min, max) {
  return Math.max(Math.min(value, max), min);
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