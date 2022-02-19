module.exports = function RotateMatrix(matrix) {
	const mtrlen = matrix.length;
	const edge = Math.sqrt(mtrlen);
	if (Number.isInteger(edge) == false) {
		throw new Error('not a real NxN matrix');
	}

	for (let i = 0; i < edge; i++) {
		for (let j = 0; j < edge; j++) {
			if (j > i)  {
				const midx1 = getItemIdx(i, j, edge);
				const midx2 = getItemIdx(j, i, edge);
				let tmp = matrix[midx2];
				matrix[midx2] = matrix[midx1];
				matrix[midx1] = tmp;
			}
		}
	}

	return matrix;
}

function getItemIdx(i, j, edge) {
	return i * edge + j;
}