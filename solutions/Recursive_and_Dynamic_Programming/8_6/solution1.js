module.exports = function TowersOfHanoi(stTower1, stTower2, stTower3) {
  function recursive(stSrcTower, stHelperTower, stTargetTower, numDisks) {
    if (numDisks > 0) {
      let newStSrcTower = stSrcTower;
      let newStHelperTower = stTargetTower;
      let newStTargetTower = stHelperTower;
      recursive(newStSrcTower, newStHelperTower, newStTargetTower, numDisks - 1);

      const disk = newStSrcTower.pop();
      newStHelperTower.push(disk);

      let tmp = newStSrcTower;
      newStSrcTower = newStTargetTower;
      newStTargetTower = newStHelperTower;
      newStHelperTower = tmp;
      recursive(newStSrcTower, newStHelperTower, newStTargetTower, numDisks - 1);
    }
  }

  recursive(stTower1, stTower2, stTower3, stTower1.size());
}