module.exports = function ValidateBST(treeNode) {
  function checkWithMinMax(tNode, min, max, compareMode) {
    if (tNode == null) {
      return true;
    }

    if ((min !== null && tNode.data < min) || (max !== null && tNode.data > max)) {
      return false;
    }

    if (compareMode == 'gt') {
      if (!checkWithMinMax(tNode.left, min, tNode.data, compareMode) || !checkWithMinMax(tNode.right, tNode.data, max, compareMode)) {
        return false;
      }
    } else {
      if (!checkWithMinMax(tNode.left, tNode.data, max, compareMode) || !checkWithMinMax(tNode.right, min, tNode.data, compareMode)) {
        return false;
      }
    }


    return true;
  }

  if (treeNode == null) {
    return false;
  }

  let compareMode;
  if (treeNode.left) {
    if (treeNode.data >= treeNode.left.data) {
      compareMode = 'gt';
    } else {
      compareMode = 'lt';
    }
  } else if (treeNode.right && compareMode == null) {
    if (treeNode.data <= treeNode.right.data) {
      compareMode = 'gt';
    } else {
      compareMode = 'lt';
    }
  } else {
    return true;
  }

  return checkWithMinMax(treeNode, null, null, compareMode);
}