const testWithSolution = function(title, Solution) {
  const root = new Solution(10);
  const n20 = root.addLeftChildByData(20);
  const n30 = root.addRightChildByData(30);
  const n40 = n20.addLeftChildByData(40);
  const n50 = n20.addRightChildByData(50);
  const n60 = n30.addLeftChildByData(60);
  const n70 = n30.addRightChildByData(70);

  test(title + ': ' +
  'test count getter', function() {
    expect(root.count).toBe(7);
  });

  test(title + ': ' + 
  'test find() method', function() {
    const foundNode = root.find(node => {
      return node.data == 20;
    });
    expect(foundNode).toBe(n20);
  });

  test(title + ': ' +
  'test delete() method', function() {
    expect(root.left).toBe(n20);
    const foundN20 = root.find(node => {
      return node.data == 20;
    });
    const deletedN20 = root.delete(foundN20);
    expect(root.count).toBe(4);
    expect(root.left).toBe(null);
    expect(deletedN20.left).toBe(n40);

    // revert it back
    root.insert('left', deletedN20);
    expect(root.left).toBe(n20);
    expect(root.count).toBe(7);
  });

  test(title + ': ' +
  'test getRandomNode() method', function() {
    const statistic = {};
    const totalCount = 1000000;
    for (let i = 0; i < totalCount; i++) {
      let node = root.getRandomNode();
      if (statistic[node.data] == null)  {
        statistic[node.data] = 0;
      }
      statistic[node.data]++;
    }

    const standardAvgProbability = 1 / Object.keys(statistic).length;
    console.log('standardAvgProbability = ', standardAvgProbability);

    for (const [key, count] of Object.entries(statistic)) {
      const probability =  count / totalCount;
      const probabilityDiff = Math.abs(probability - standardAvgProbability);
      const probabilityDiffScale1000 = Math.trunc(probabilityDiff * 1000);
      console.log(`${key} count = ${count} and probability = ${probability} and probability diff = ${probabilityDiff} and diff with scaling 1000 = ${probabilityDiffScale1000}`);
      expect(probabilityDiffScale1000).toBe(0);
    }
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);