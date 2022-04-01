const testWithSolution = function(title, Solution) {
  test(title + ':' +
  '', function() {
		const root = new Solution(10);
    const n20 = root.addLeftChildByData(20);
    const n30 = root.addRightChildByData(30);
    const n40 = n20.addLeftChildByData(30);
    const n50 = n20.addRightChildByData(30);
    const n60 = n30.addLeftChildByData(60);
    const n70 = n30.addLeftChildByData(60);

   let node = root.getRandomNode();
   console.log('random node = ', node.data);

  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);