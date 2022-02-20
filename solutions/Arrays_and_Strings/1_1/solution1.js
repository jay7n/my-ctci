module.exports = function IsUnique(str) {
  const charSet = new Array(128).fill(false);
  for (let i = 0; i < str.length; i++) {
    const cc = str.charCodeAt(i);
    if (charSet[cc] === false) {
      charSet[cc] = true;
    } else {
      return false;
    }
  }
  return true;
}