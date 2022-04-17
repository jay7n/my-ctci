const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');

const testWithSolution = function(title, solution) {
  test(title + ': ' + 
  '', () => {
    const n20 = new BinaryTreeNode(20);
      const n10 = n20.addLeftChildByData(10);
        const n15 = n10.addLeftChildByData(15);
          const n5 = n15.addLeftChildByData(5);
      const n3 = n20.addRightChildByData(3);
        const n7 = n3.addLeftChildByData(7);

    let pathsRes = solution(n20, 30);
    const correctAllPaths = [
      '20->10',
      '20->3->7',
      '10->15->5',
    ];
    if (pathsRes.paths) {
      pathsRes.paths.forEach(path => {
        expect(correctAllPaths.includes(path)).toBe(true);
      });
    }
    expect(pathsRes.totalPathCount).toBe(3);

    pathsRes = solution(n20, 25);
    if (pathsRes.paths) {
      expect(pathsRes.paths[0]).toBe('10->15');
    }
    expect(pathsRes.totalPathCount).toBe(1);

    pathsRes = solution(n20, 100);
    expect(pathsRes.totalPathCount).toBe(0);
  });

  test(title + ': ' + 
  '', () => {
    const n10l0 = new BinaryTreeNode(10);
      const n20 = n10l0.addLeftChildByData(20);
        const n10l2i0 = n20.addLeftChildByData(10);
        const n5 = n20.addRightChildByData(5);
          const n5l3 = n5.addLeftChildByData(5);
      const n10l1 = n10l0.addRightChildByData(10);
        const n10l2i1 = n10l1.addLeftChildByData(10);
        const n3 = n10l1.addRightChildByData(3);
          const n2 = n3.addLeftChildByData(2);
            const n2l4 = n2.addLeftChildByData(2);
            const n15 = n2.addRightChildByData(15);
          const n17 = n3.addRightChildByData(17);

    const pathsRes = solution(n10l0, 30);
    console.log('pathsRes = ', pathsRes);

    const correctAllPaths = [
      '20->10',
      '20->5->5',
      '10->20',
      '10->10->10',
      '10->3->2->15',
      '10->3->17'
    ];

    if (pathsRes.paths) {
      pathsRes.paths.forEach(path => {
        expect(correctAllPaths.includes(path)).toBe(true);
      });
    }
    expect(pathsRes.totalPathCount).toBe(6);
    
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);

const Solution2 = require('./solution2');
testWithSolution('Solution2', Solution2);