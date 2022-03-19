const { LinkedList } = require('../../../datastructures/LinkedList/solution1');

module.exports = function ListOfDepths(rootTreeNode) {
	if (rootTreeNode) {
		const lists = [new LinkedList([rootTreeNode])];
		let curList = lists[0];
		while(curList) {
			let curNode = curList.head;
			let nextList;
			if (curNode && curNode.data && (curNode.data.left || curNode.data.right)) {
				nextList = new LinkedList();
				while (curNode && curNode.data) {
					if (curNode.data.left) {
						nextList.add(curNode.data.left);
					}
					if (curNode.data.right) {
						nextList.add(curNode.data.right);
					}
					curNode = curNode.next;
				}
				lists.push(nextList);
			}
			curList = nextList;
		}

		const res = lists.map(list => {
			const dataRes = [];
			let cur = list.head;
			while(cur && cur.data) {
				dataRes.push(cur.data.data);
				cur = cur.next;
			}
			return dataRes;
		})
		return res;
	}
	return null;
}