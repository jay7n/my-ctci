module.exports = function PowerSet(array) {
  const resLength = Math.pow(2, array.length);
  const res = new Array(resLength).fill(1).map(() => []); // !! THIS IS IMPORTANT !!

  let interval =  resLength / 2;
  let x = 0;
  while (interval >= 1) {
    for (let i = interval ; i < resLength; i += 2 * interval) { // !! Mind that we should jump for 2 * interval !!
      for (let j = i; j < i + interval; j++) {
        res[j].push(array[x]);
      }
    }
    interval = interval / 2;
    x++;
  }

  console.log('Solution3 PowerSet res = ', res);
  return res;

}