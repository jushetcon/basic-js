const { NotImplementedError } = require('../extensions/index.js')

function getSumOfDigits(n) {
	let sum = n

	while (sum >= 10) {
		sum = sum
			.toString()
			.split('')
			.reduce((acc, digit) => acc + parseInt(digit, 10), 0)
	}

	return sum
}
module.exports = {
	getSumOfDigits,
}
