module.exports = function ZeroMatrix(matrixMxN) {
	const collen = matrixMxN[0].length;
	const rowlen = matrixMxN.length;

	const colMap = new Array(collen);
	const rowMap = new Array(rowlen);

	for (let r = 0; r < rowlen; r++) {
		for (let c = 0; c < collen; c++) {
			if (matrixMxN[r][c] === 0) {
				colMap[c] = 1;
				rowMap[r] = 1;
			}
		}
	}

	for (let r = 0; r < rowMap.length; r++) {
		if (rowMap[r] != null) {
			zeroRow(matrixMxN, collen, r);
		}
	}

	for (let c = 0; c < colMap.length; c++) {
		if (colMap[c] != null) {
			zeroCol(matrixMxN, rowlen, c);
		}
	}

	console.log('matrixMxN after = ', matrixMxN);
	return matrixMxN;
}

function zeroRow(matrixMxN, collen, rowidx) {
	for (let i = 0; i < collen; i++) {
		matrixMxN[rowidx][i] = 0;
	}
}

function zeroCol(matrixMxN, rowlen, colidx) {
	for (let i = 0; i < rowlen; i++) {
		matrixMxN[i][colidx] = 0;
	}
}