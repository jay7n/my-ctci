module.exports = function PowerSet(array) {
  const resLength = Math.pow(2, array.length);

  /** Irrelevant to this problem but is a useful and important knowledge
   *  
   * Consider the below code: 
   * ```
   * const list = new Array(4).fill([]);
   * list[0].push('hello');
   * console.log(list); // What is this result?
   * ```
   * If you reckon there is a ['hello'] in the head followed by three empty sub-arrays,
   * then you're wrong.
   * 
   * You will end up getting four elements with exactly the same value ['hello]:
   * ```
   * [['hello'], ['hello'], ['hello'], ['hello']]
   * ```
   * How is this possible? How does this come? 
   * Well, It takes me some minutes to figure out why.
   * 
   * The tricks lies on the Array's method **`fill(value)`**. 
   * This method will use the given value to fill the array, in a **`shallow-copy`** way.
   * If the given value is primitive values(i.e. numbers, booleans and the alike) it's totally fine.
   * But if the given value is of compound types(like [] or {}), then only the reference(or pointer) will be copied.
   * It means every single element in the array all points to the same compound value.
   * So once any of them is changed, the rest are changed too.
   * Because there's actually only one real entity under the hood.
   */
  const res = new Array(resLength).fill(1).map(() => []); 



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