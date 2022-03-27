const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');
const testWithSolution = function(title, BSTSequences) {
	test(title + ': ' +
	'test solution GetWeavedArrays', () => {
		let array1 = [1,2];
		let array2 = [3,4];
		let weavedArrays = BSTSequences.GetWeavedArrays(array1, array2);
		expect(weavedArrays).toStrictEqual([
		  [ 1, 2, 3, 4 ],
      [ 1, 3, 2, 4 ],
      [ 1, 3, 4, 2 ],
      [ 3, 1, 2, 4 ],
      [ 3, 1, 4, 2 ],
      [ 3, 4, 1, 2 ]
		]);

		array1 = [1];
		array2 = [3];
		weavedArrays = BSTSequences.GetWeavedArrays(array1, array2);
		expect(weavedArrays).toStrictEqual([
			[1,3],
			[3,1]
		]);
	});

	test(title + ': ' + 
	'test solution getTNodeSeq', () => {
		const root = new BinaryTreeNode(2);
		root.addLeftChildByData(1);
		root.addRightChildByData(3);

		const bstSeq = new BSTSequences(root);

		const res = bstSeq.getTNodeSeq(root);

		const allArrays = res.map(arr => arr.join(', '));
		allArrays.includes('2, 1, 3');
		allArrays.includes('2, 3, 1');
	});

	test(title + ': ' + 
	'test solution getAllSequences with a complex tree (example from https://stackoverflow.com/a/57948148)', () => {
		const root = new BinaryTreeNode(4);
		const n1 = root.addLeftChildByData(1);
		const n5 = root.addRightChildByData(5);
		const n0 = n1.addLeftChildByData(0);
		const n2 = n1.addRightChildByData(2);
		const n6 = n5.addRightChildByData(6);

		const bstSeq = new BSTSequences(root);

		const res = bstSeq.getAllSequences();

		const allArrays = res.map(arr => arr.join(', '));
		expect(allArrays.length).toBe(20);

		expect(allArrays.includes('4, 1, 0, 2, 5, 6')).toBe(true); // idx 1
		expect(allArrays.includes('4, 1, 0, 5, 2, 6')).toBe(true); 
		expect(allArrays.includes('4, 1, 0, 5, 6, 2')).toBe(true);
		expect(allArrays.includes('4, 1, 5, 0, 2, 6')).toBe(true);
		expect(allArrays.includes('4, 1, 5, 0, 6, 2')).toBe(true); // idx 5
		expect(allArrays.includes('4, 1, 5, 6, 0, 2')).toBe(true);
		expect(allArrays.includes('4, 5, 1, 0, 2, 6')).toBe(true);
		expect(allArrays.includes('4, 5, 1, 0, 6, 2')).toBe(true);
		expect(allArrays.includes('4, 5, 1, 6, 0, 2')).toBe(true);
		expect(allArrays.includes('4, 5, 6, 1, 0, 2')).toBe(true); // idx 10
		expect(allArrays.includes('4, 1, 2, 0, 5, 6')).toBe(true);
		expect(allArrays.includes('4, 1, 2, 5, 0, 6')).toBe(true);
		expect(allArrays.includes('4, 1, 2, 5, 6, 0')).toBe(true);
		expect(allArrays.includes('4, 1, 5, 2, 0, 6')).toBe(true);
		expect(allArrays.includes('4, 1, 5, 2, 6, 0')).toBe(true); // idx 15
		expect(allArrays.includes('4, 1, 5, 6, 2, 0')).toBe(true);
		expect(allArrays.includes('4, 5, 1, 2, 0, 6')).toBe(true);
		expect(allArrays.includes('4, 5, 1, 2, 6, 0')).toBe(true);
		expect(allArrays.includes('4, 5, 1, 6, 2, 0')).toBe(true);
		expect(allArrays.includes('4, 5, 6, 1, 2, 0')).toBe(true); // idx 20
		
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);