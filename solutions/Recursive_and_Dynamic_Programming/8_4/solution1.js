module.exports = function PowerSet(array) {
  function recursive(idx, array) {
    if (idx > 0) {
      const res = recursive(idx - 1, array);
      const newSubSet1 = JSON.parse(JSON.stringify(res));
      const newSubSet2 = res.map(subSet => {subSet.push(array[idx]); return subSet; });
      return [].concat(newSubSet1, newSubSet2);
    } else {
      return [[], [array[0]]];
    }
  }

  const res = recursive(array.length - 1, array);
  console.log('PowerSet res = ', res);
  return res;
}