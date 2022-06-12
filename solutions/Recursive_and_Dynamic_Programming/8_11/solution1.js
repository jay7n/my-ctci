module.export = function Coins(nCents) {

  function recursive(nCents) {
    let res = [];

    if (nCents >= 25) {
      const res1 = recursive(25);
      const res2 = recursive(nCents - 25);
      res = res.concat(combine(res1, res2));
    }

    if (nCents >= 10) {
      const res1 = recursive(10);
      const res2 = recursive(nCents - 10);
      res = res.concat(combine(res1, res2));
    }

    if (nCents >= 5) {
      const res1 = recursive(5);
      const res2 = recursive(nCents - 5);
      res = res.concat(combine(res1, res2));
    }

    if (nCents < 5) {
      return new Array(nCents).fill(1);
    }

    return res;
  }

  function combine(arr1, arr2) {

  }

  const res = recursive(nCents);
  console.log('Coins res = ', res);

  return res;
}