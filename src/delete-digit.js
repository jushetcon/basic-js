const { NotImplementedError } = require('../extensions/index.js')

function deleteDigit(n) {
	let stringNum = String(n)
	let maxNumber = 0

	for (let i = 0; i < stringNum.length; i++) {
		let currentNum = stringNum.slice(0, i) + stringNum.slice(i + 1)
		currentNum = Number(currentNum)
		if (currentNum > maxNumber) {
			maxNumber = currentNum
		}
	}
	return Math.abs(maxNumber)
}

module.exports = {
	deleteDigit,
}
