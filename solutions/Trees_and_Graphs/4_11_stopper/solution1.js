class RandomNode {
  left;
  right;
  parent;
  data;

  constructor(data) {
    this.data = data;
  }

  get count() { // we can use a count() getter with a recursive counting call
    let res = 1;
    if (this.left) {
      res += this.left.count;
    }
    if (this.right) {
      res += this.right.count;
    }
    return res;
  }

  addLeftChildByData(data) {
    const node = new RandomNode(data);
    this.insert('left', node);
    return node;
  }

  addRightChildByData(data) {
    const node = new RandomNode(data);
    this.insert('right', node);
    return node;
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
      } 
      if (node.right) {
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
    return nodeToDelete;
  }

  getRandomNode() {
    const random = Math.ceil(Math.random() * this.count);
    const leftCount = this.left ? this.left.count : 0;
    const rightCount = this.right ? this.right.count : 0;
    const count = leftCount + rightCount + 1;
    // console.log('current node data = ', this.data, 'random = ', random);
    // console.log('current count = ', count, 'left count = ', leftCount, 'right count = ', this.rightCount);

    if (random >= 1 && random <= leftCount ) {
      return this.left.getRandomNode();
    } else if (random == leftCount + 1) {
      return this;
    } else if (random > leftCount + 1 && random <= count) {
      return this.right.getRandomNode();
    }
  }

}

module.exports = RandomNode;