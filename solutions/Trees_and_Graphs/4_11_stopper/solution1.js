class RandomNode {
  left;
  right;
  parent;
  data;
  leftCount;
  rightCount;

  constructor(data) {
    this.data = data;
    this.leftCount = 0;
    this.rightCount = 0;
  }

  get count() {
    return this.leftCount + this.rightCount + 1;
  }

  insert(subBranchName, randomNode) {
    if (subBranchName == 'left') {
      this.left = randomNode;
      randomNode.parent = this;
      this.leftCount = randomNode.count;
      return true;
    } else if (subBranchName == 'right') {
      this.right = randomNode;
      randomNode.parent = this;
      this.rightCount = randomNode.count;
      return true;
    } else {
      return false;
    }
  }

  find(cb) {
    let res;
    const q = [this];
    while(q.length > 0)  {
      const node = q.splice(0, 1)[0];
      if (cb(node)) {
        res = node;
        break;
      }
      if (node.left) {
        q.push(node.left);
      } else if (node.right) {
        q.push(node.right);
      }
    }
    return res;
  }

  delete(node) {
    const nodeToDelete = this.find(elem => elem === node);
    if (nodeToDelete) {
      const parent = nodeToDelete.parent;
      nodeToDelete.parent = null;
      if (parent.left === nodeToDelete) {
        parent.leftCount = 0;
        parent.left = null;
      } else {
        parent.rightCount = 0;
        parent.right = null;
      }
    }
  }

  getRandomNode() {

  }

}

module.exports = RandomNode;