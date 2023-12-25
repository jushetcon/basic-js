const { NotImplementedError } = require('../extensions/index.js')

function minesweeper(matrix) {
	const rows = matrix.length
	const cols = matrix[0].length
	const result = []

	for (let i = 0; i < rows; i++) {
		result.push([])
		for (let j = 0; j < cols; j++) {
			let count = 0

			for (let ni = i - 1; ni <= i + 1; ni++) {
				for (let nj = j - 1; nj <= j + 1; nj++) {
					if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && !(ni === i && nj === j)) {
						count += matrix[ni][nj] ? 1 : 0
					}
				}
			}

			result[i].push(count)
		}
	}

	return result
}

module.exports = {
	minesweeper,
}
