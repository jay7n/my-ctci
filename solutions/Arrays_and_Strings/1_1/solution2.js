
module.exports = function IsUnique(str) {
  const charSet = createCharSet(128);
  for (let i = 0; i < str.length; i++) {
    if (charAtCharSetIsUnique(str[i], charSet) == false) {
      return false;
    }
  }
  return true;
}

function createCharSet(charNum) {
  let byteNum = Math.floor(charNum / 8);
  if (charNum % 8 > 0) {
    byteNum += 1;
  }
  const charSet = new Array(byteNum).fill(String.fromCharCode(0));
  return charSet;
}

function charAtCharSetIsUnique(char, charSet) {
  const charCode = char.charCodeAt();
  const slotIdx = Math.floor(charCode / 8); // point1 - use Math.floor() to get integer-divide
  const bitIdx = charCode % 8;
  const slot = charSet[slotIdx];
  if (slot >> bitIdx == 1) {
    return false;
  } else {
    charSet[slotIdx] |= (1 << bitIdx); // point2 - bit-op '1' should be placed at left hand (not bitIdx << 1)
    return true;
  }

}