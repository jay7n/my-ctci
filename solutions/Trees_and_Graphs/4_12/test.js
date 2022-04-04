const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');

const testWithSolution = function(title, solution) {
  test(title + ': ' + 
  '', () => {
  });

  test(title + ': ' + 
  '', () => {
    const n10l0 = new BinaryTreeNode(10);
      const n20 = n10l0.addLeftChildByData(20);
        const n10l2i0 = n20.addLeftChildByData(10);
        const n5 = n20.addRightChildByData(5);
          const n5l3 = n5.addLeftChildByData(5);
        const n10l1 = n10l0.addRightChild(10);
          const n10l2i1 = n10l1.addLeftChildByData(10);
          const n3 = n10l1.addRightChildByData(3);
            const n2 = n3.addLeftChildByData(2);
              const n2l4 = n2.addLeftChildByData(2);
              const n15 = n2.addRightChildByData(15);
            const n17 = n3.addRightChildByData(17);

    const { paths } = solution(n3, 3);
    
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);