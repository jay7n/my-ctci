const Bits = require('../../../datastructures/Bits/solution1');

module.exports = function NextNumber(num) {
  const bitsArray = Bits.printNumAsUnsignedBits(num);
  console.log('original num = ', num, ' bitsArray = ', bitsArray);
  const smallerNum = getNextSmallerNumByBits(bitsArray);
  const biggerNum = getNextBiggerNumByBits(bitsArray);
  return [smallerNum, biggerNum];
}

function getNextSmallerNumByBits(bitsArray) {
  const newBitsArray = bitsArray.slice();
  let last0sIdxAtRightOf1sIdx = -1;
  let first1sAtLeftOfLast0sIdx = -1;

  for (let i = newBitsArray.length - 1; i > -1; i--) {
    const bit = newBitsArray[i];

    if (bit === 0 && first1sAtLeftOfLast0sIdx === -1) {
      last0sIdxAtRightOf1sIdx = i;
    }
    if (bit === 1 && last0sIdxAtRightOf1sIdx !== -1) {
      first1sAtLeftOfLast0sIdx = i;
    }
  }

  if (last0sIdxAtRightOf1sIdx === -1) {
    return 'already smallest';
  }
  if (first1sAtLeftOfLast0sIdx === -1) {
    return 'already smallest';
  }

  newBitsArray[last0sIdxAtRightOf1sIdx] = 1;
  newBitsArray[first1sAtLeftOfLast0sIdx] = 0;

  const res = Bits.printBitsAsUnsignedNum(newBitsArray);
  console.log('getNextSmallerNumByBits last0sIdxAtRightOf1sIdx = ', last0sIdxAtRightOf1sIdx, 'first1sAtLeftOfLast0sIdx = ', first1sAtLeftOfLast0sIdx, 'newBitsArray = ', newBitsArray, 'res = ', res);
  return res;
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
  console.log('getNextBiggerNumByBits first1sIdx = ', first1sIdx, 'first0sAtLeftOfFirst1sIdx = ', first0sAtLeftOfFirst1sIdx, 'newBitsArray = ', newBitsArray, 'res = ', res);
  return res;
}
