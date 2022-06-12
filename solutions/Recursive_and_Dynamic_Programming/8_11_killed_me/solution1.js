module.exports = function Coins(nCents) {

  const cache = {};

  function twoParts(nCents, coinValue) {
    let res = [];
    if (nCents > coinValue) {
      const res1 = recursive(coinValue);
      const res2 = recursive(nCents - coinValue);
      res = res.concat(combine(res1, res2));
    } else if (nCents == coinValue) {
      res = res.concat([`${coinValue}`]);
    }
    return res;
  }

  function recursive(nCents) {
    if (cache[nCents]) {
      return cache[nCents];
    }

    let res = [];

    res = res.concat(twoParts(nCents, 25));

    res = res.concat(twoParts(nCents, 10));

    res = res.concat(twoParts(nCents, 5));

    res = res.concat(twoParts(nCents, 1));

    cache[nCents] = deDuplication(res);

    return cache[nCents];
  }

  function combine(arr1, arr2) {
    let res = [];
    for (const elm1 of arr1) {
      for (const elm2 of arr2) {
        res.push([elm1, elm2].join());
      }
    }
    return res;
  }

  function deDuplication(arr) {
    const res = [];
    const set = new Set();
    for (const elm of arr) {
      const key = elm.split(',').sort((a,b) => a - b).join(); // !!!!! array.sort(fn) - the fn return value should be a int (rather than a boolean), which is > 0, == 0 or < 0
      if (!set.has(key)) {
        res.push(elm);
        set.add(key);
      }
    }
    return res;
  }

  let res = recursive(nCents);
  console.log('Coins res = ', res, 'cache = ', cache);

  return res;
}