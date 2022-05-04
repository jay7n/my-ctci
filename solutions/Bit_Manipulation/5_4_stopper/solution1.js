const Bits = require('../../../datastructures/Bits/solution1');

module.exports = function NextNumber(num) {
  const bitsArray = Bits.printNumAsUnsignedBits(num);
  const smallerNum = getNextSmallerNumByBits(bitsArray);
  const biggerNum = getNextBiggerNumByBits(bitsArray);
  return [smallerNum, biggerNum];
}

function getNextSmallerNumByBits(bitsArray) {
  const newBitsArray = bitsArray.slice();
  let first1sIdx = -1;
  let first0sIdxAtRightOfFirst1sIdx = -1;

  for (let i = newBitsArray.length - 1; i > -1; i--) {
    const bit = newBitsArray[i];
    if (bit === 0 && first1sIdx == -1) {
      first0sIdxAtRightOfFirst1sIdx = i;
    }
    if (first1sIdx !== -1 && bit === 1) {
      first1sIdx = i;
    }
  }

  if (first1sIdx === -1) {
    return Bits.printBitsAsUnsignedNum(newBitsArray);
  }

  if (first0sIdxAtRightOfFirst1sIdx === -1) { 
   return 'already smallest';
  }

  newBitsArray[first0sIdxAtRightOfFirst1sIdx] = 1;
  newBitsArray[first1sIdx] = 0;

  return Bits.printBitsAsUnsignedNum(newBitsArray);
}

function getNextBiggerNumByBits(bitsArray) {
  const newBitsArray = bitsArray.slice();
  let first1sIdx = -1;
  let first0sAtLeftOfFirst1sIdx = -1;
  
  for (let i = newBitsArray.length - 1; i > -1; i--) {
    const bit = newBitsArray[i];
    if (bit === 1 && first1sIdx === -1) {
      first1sIdx = i;
    }
    if (first1sIdx !== -1 && bit === 0 && first0sAtLeftOfFirst1sIdx === -1) {
      first0sAtLeftOfFirst1sIdx = i;
    }
  }

  if (first1sIdx === -1) {
    return Bits.printBitsAsUnsignedNum(newBitsArray);
  }

  if (first0sAtLeftOfFirst1sIdx === -1) {
    newBitsArray.splice(0, 0, 1);
    first0sAtLeftOfFirst1sIdx = 0;
  }

  newBitsArray[first1sIdx] = 0;
  newBitsArray[first0sAtLeftOfFirst1sIdx] = 1;

  const res = Bits.printBitsAsUnsignedNum(newBitsArray);
  console.log('getNextBiggerNumByBits first1sIdx = ', first1sIdx, 'firstNonTrailing0sIdx = ', first0sAtLeftOfFirst1sIdx, 'newBitsArray = ', newBitsArray, 'res = ', res);
  return res;
}
