module.exports = function PanlindromePermutation(str) {
	const bit32Set = createBit32Set(128);

	for (const c of str) {
		toggleCharAtBit32Set(c, bit32Set);
	}

	for (const c of bit32Set) {
		if (isAtMostOnlyOneTrueBitInBit32(c) === false) {
			return false;
		}
	}

	return true;
}

// referenced from 1_1-solution2 and modified
function createBit32Set(charNum) {
	// point1 - we can treat a number type as a 32-bit-dictionary where chars can be stored.
	// thus a set containing 128 chars needs 4 such numbers in js.
	// though in js a number type in fact is composed of 64 bit,
	// considering all bitwise-operations in js would convert 64bit operands to 32bit number 
	//    (and then convert the result back to 64bit number again)
	// we should regard all used numbers as ones not exceeding 32 bit. 
	//
  let bit32Num = Math.floor(charNum / 32);
  if (bit32Num % 32 > 0) {
    bit32Num += 1;
  }
  const bit32Set = new Array(bit32Num).fill(0);
  return bit32Set;
}

// modified based on 1_1-solution2-charAtCharSetIsUnique
function toggleCharAtBit32Set(char, bit32Set) {
  const charCode = char.charCodeAt();
  const slotIdx = Math.floor(charCode / 32); // point2 - use Math.floor() to get integer-divide
  const bitIdx = charCode % 32;

	// point3 - bit-op '1' should be placed at left hand (not bitIdx << 1)
	// point4 - use XOR-op(a ^ char) to do the 'toggle' behavior
	bit32Set[slotIdx] ^= (1 << bitIdx); 
}

function isAtMostOnlyOneTrueBitInBit32(bit32) {
	if (bit32 === 0) {
		return true;
	} else {
		return (bit32 & (bit32 - 1)) == 0;
	}
}