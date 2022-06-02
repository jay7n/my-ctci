module.exports = function PowerSet(array) {
  const cache = [];
  function recursive(idx, array) {
    if (cache[idx]) {
      return cache[idx];
    }
    let res;
    if (idx > 0) {
      const prevRes = recursive(idx - 1, array);
      const newSubSet1 = JSON.parse(JSON.stringify(prevRes));
      const newSubSet2 = prevRes.map(subSet => {subSet.push(array[idx]); return subSet; });
      res = [].concat(newSubSet1, newSubSet2);
    } else {
      res = [[], [array[0]]];
    }
    cache[idx] = res;
    return res;
  }

  const res = recursive(array.length - 1, array);
  console.log('PowerSet res = ', res);
  return res;
}