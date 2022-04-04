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
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
  }

  getRandomNode() {

  }

}

module.exports = RandomNode;