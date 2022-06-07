module.exports = function PermutationsWithDups(str) {
  const charSet = str.split('');
  const res = [];

  function recursive(charSet) {
    if (charSet.length == 1) {
      res.push([charSet[0]]);
    }
    for (let i = 0;  i < charSet.length; i++) {
      const c = charSet[i];
      const nextCharSet = charSet.filter((_, idx) => idx !== i);
      recursive(nextCharSet);
    }
  }

  recursive(charSet);
  console.log('res = ', res);

  const resStrs = res.map(perm => perm.join(''));
  console.log('PermutationsWithDups resStrs = ', resStrs);
  return resStrs;
}