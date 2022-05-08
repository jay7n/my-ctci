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

  console.log(
  'u8a = ', u8a,
  'startByteOffsetIdx = ', startByteOffsetIdx,
  'startBitIdxInByte = ', startBitIdxInByte,
  'endByteOffsetIdx = ', endByteOffsetIdx,
  'endBitIdxInByte = ', endBitIdxInByte,
  );

  if ( endByteOffsetIdx === startByteOffsetIdx) {
    const num = drawLineInOneByte(startBitIdxInByte, endBitIdxInByte);
    u8a.set([num], startByteOffsetIdx);
  } else {
    let curOffset = startByteOffsetIdx;
    const startNum = drawLineInOneByte(startBitIdxInByte, 7); // 7, not 8
    u8a.set([startNum], curOffset);
    curOffset++;

    const durBytes = endByteOffsetIdx - startByteOffsetIdx - 1;
    if (durBytes > 0) {
      const bytes = new Array(durBytes).fill(255);
      u8a.set(bytes, curOffset);
      curOffset += durBytes;
    }

   const endNum = drawLineInOneByte(0, endBitIdxInByte);
   u8a.set([endNum], curOffset);
  }

  let res = [];
  u8a.map(num => {
    res = res.concat(Bits.printNumAsUnsignedBits(num, 8));
  });

  console.log('res = ', res);

  return res;

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
  start = Math.max(Math.min(7, start), 0);
  end = Math.max(Math.min(7, end), 0);

  const len = end - start + 1;
  const bitArray = new Array(len).fill(1);
  let num = Bits.printBitsAsUnsignedNum(bitArray);
  num = num << (7 - end);

  console.log('drawLineInOneByte start = ', start, 'end = ', end, 'num = ', num, 'res = ', Bits.printNumAsUnsignedBits(num, 8).join(''));

  return num;
}

0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 
1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0


0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 
1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0