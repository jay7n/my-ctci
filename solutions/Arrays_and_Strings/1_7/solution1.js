module.exports = function RotateMatrix(matrix) {
	console.log('matrix before = ', matrix);

	const mtrlen = matrix.length;
	const initialEdge = Math.sqrt(mtrlen);
	if (Number.isInteger(initialEdge) == false) {
		throw new Error('not a real NxN matrix');
	}

	let startIdx = [0, 0];
	let edge = initialEdge;

	while(edge > 1) {
		console.log('LOOP EDGE =', edge);
		for (let i = 0; i < edge - 1; i++) {
			console.log('initialEdge = ', initialEdge);
			let prevIdx = getArrayIdxFromMatrixIdx([startIdx[0] + i, startIdx[1]], initialEdge);
			console.log('prevIdx = ', prevIdx);
			let tmp = matrix[prevIdx];
			console.log('tmp = ', tmp);
			let sequenceNumber = 3;
			while (sequenceNumber > 0) {
				console.log('sequenceNumber = ', sequenceNumber);
				const curIdx = getArrayIdx(startIdx, i, edge, initialEdge, sequenceNumber);
				console.log('curIdx = ', curIdx,  'prevIdx = ', prevIdx);
				matrix[prevIdx] = matrix[curIdx];
				prevIdx = curIdx;
				--sequenceNumber;
				console.log('matrix = ', matrix);
			}
			matrix[prevIdx] = tmp;
			console.log('matrix = ', matrix);
		}
		startIdx[0]++;
		startIdx[1]++;
		edge -= 2;
	}

	
	console.log('matrix after = ', matrix);
	return matrix;

}

function getArrayIdx(startIdx, marchingStep, edge, initialEdge, sequenceNumber) {
	const marchingStartIdx = getMarchingStartIdx(startIdx, edge, sequenceNumber);
	console.log('marchingStartIdx = ', marchingStartIdx);
	const matrixIdx = getMatrixIdx(
		marchingStartIdx, 
		marchingStep, 
		edge,
		sequenceNumber % 2 == 0, 
		sequenceNumber < 2
	);
	console.log('matrixIdx = ', matrixIdx);
	const arrayIdx = getArrayIdxFromMatrixIdx(matrixIdx, initialEdge);
	console.log('arrayIdx = ', arrayIdx);
	return arrayIdx;
}

function getMarchingStartIdx(initialStartIdx, edge, sequenceNumber) {
	switch(sequenceNumber) {
	case 0:	
		return initialStartIdx;
	case 1:
		return [initialStartIdx[0] + edge - 1, initialStartIdx[1]];
	case 2:
		return [initialStartIdx[0] + edge - 1, initialStartIdx[1] + edge - 1];
	case 3:
		return [initialStartIdx[0], initialStartIdx[1] + edge - 1];
	}
}

function getMatrixIdx(marchingStartIdx, marchingStep, edge, isHorizontalDirection, isPositiveOrder) {
	console.log('marchingStep = ', marchingStep);
	const matrixIdx = [marchingStartIdx[0], marchingStartIdx[1]];
	console.log('matrixIdx = ', matrixIdx);
	console.log('isHorizontalDirection = ', isHorizontalDirection);
	console.log('isPositiveOrder = ', isPositiveOrder);
	if (isHorizontalDirection) {
		if (isPositiveOrder) {
			matrixIdx[0] += marchingStep;
		} else {
			matrixIdx[0] -= marchingStep;
		}
	} else {
		if (isPositiveOrder) {
			matrixIdx[1] += marchingStep;
		} else {
			matrixIdx[1] -= marchingStep;
		}
	}
	return matrixIdx;
}

function getArrayIdxFromMatrixIdx(matrixIdx, initialEdge) {
	return matrixIdx[1] * initialEdge + matrixIdx[0];
}
