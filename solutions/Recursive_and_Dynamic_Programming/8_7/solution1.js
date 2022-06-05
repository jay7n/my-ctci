module.exports = function PermutationsWithoutDups(str) {
  function recursive(charSet) {
    if (charSet.length === 1) {
      return [[charSet[0]]];
    } else {
      let res = [];
      for (const c of charSet) {
        const nextCharSet = charSet.filter(el => el !== c);
        const innerRes = recursive(nextCharSet);
        for (const perm of innerRes) {
          perm.unshift(c);
        }
        res = res.concat(innerRes);
      }
      return res;
    }
  }
  
  const charSet = str.split('');
  const res = recursive(charSet);
  const resStrs = res.map(elm => elm.join(''));
  console.log('PermutationsWithoutDups resStrs = ', resStrs);
  return resStrs;
}