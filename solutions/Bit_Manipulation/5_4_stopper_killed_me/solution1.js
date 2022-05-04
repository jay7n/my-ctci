const Bits = require('../../../datastructures/Bits/solution1');

module.exports = function NextNumber(num) {
  const bitsArray = Bits.printNumAsUnsignedBits(num, 32);
  console.log('original num = ', num, ' bitsArray = ', bitsArray);
  const smallerNum = getNextSmallerNumByBits(bitsArray);
  const biggerNum = getNextBiggerNumByBits(bitsArray);
  return [smallerNum, biggerNum];
}

function getNextSmallerNumByBits(bitsArray) {
  const newBitsArray = bitsArray.slice();
  let last0sIdxAtRightOf1sIdx = -1;
  let tmp0sIdx = -1;
  let the1sIdx = -1;

  for (let i = newBitsArray.length - 1; i > -1; i--) {
    const bit = newBitsArray[i];

    if (bit === 0) {
      tmp0sIdx = i;
    }
    if (bit === 1) {
      the1sIdx = i;
      last0sIdxAtRightOf1sIdx = tmp0sIdx;
    }
    if (the1sIdx !== -1 && last0sIdxAtRightOf1sIdx !== -1) {
      break;
    }
  }

  if (last0sIdxAtRightOf1sIdx === -1) {
    return 'already smallest';
  }
  if (the1sIdx === -1) {
    return Bits.printBitsAsUnsignedNum(newBitsArray);
  }

  newBitsArray[last0sIdxAtRightOf1sIdx] = 1;
  newBitsArray[the1sIdx] = 0;

  const res = Bits.printBitsAsUnsignedNum(newBitsArray);
  console.log('getNextSmallerNumByBits last0sIdxAtRightOf1sIdx = ', last0sIdxAtRightOf1sIdx, 'first1sAtLeftOfLast0sIdx = ', the1sIdx, 'newBitsArray = ', newBitsArray, 'res = ', res);
  return res;
}

function getNextBiggerNumByBits(bitsArray) {
  const newBitsArray = bitsArray.slice();

  let the1sIdx = -1;
  let first0sAtLeftOfFirst1sIdx = -1;
  
  for (let i = newBitsArray.length - 1; i > -1; i--) {
    const bit = newBitsArray[i];
    if (bit === 1) {
      the1sIdx = i;
    }
    if (bit === 0 && the1sIdx !== -1) {
      first0sAtLeftOfFirst1sIdx = i;
    }
    if (the1sIdx !== -1 && first0sAtLeftOfFirst1sIdx !== -1) {
      break;
    }
  }

  if (the1sIdx === -1) {
    return Bits.printBitsAsUnsignedNum(newBitsArray);
  }

  if (first0sAtLeftOfFirst1sIdx === -1) {
    newBitsArray.splice(0, 0, 1);
    first0sAtLeftOfFirst1sIdx = 0;
  }

  newBitsArray[the1sIdx] = 0;
  newBitsArray[first0sAtLeftOfFirst1sIdx] = 1;

  const res = Bits.printBitsAsUnsignedNum(newBitsArray);
  console.log('getNextBiggerNumByBits first1sIdx = ', the1sIdx, 'first0sAtLeftOfFirst1sIdx = ', first0sAtLeftOfFirst1sIdx, 'newBitsArray = ', newBitsArray, 'res = ', res);
  return res;
}
