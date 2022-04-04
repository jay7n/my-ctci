class RandomNode {
  left;
  right;
  parent;
  data;

  constructor(data) {
    this.data = data;
  }

  insert(subBranchName, randomNode) {
    if (subBranchName == 'left') {
      this.left = randomNode;
      randomNode.parent = this;
      return true;
    } else if (subBranchName == 'right') {
      this.right = randomNode;
      randomNode.parent = this;
      return true;
    } else {
      return false;
    }
  }

  find() {

  }

  delete() {

  }

  getRandomNode() {

  }

}

module.exports = RandomNode;