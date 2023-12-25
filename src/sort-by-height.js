const { NotImplementedError } = require('../extensions/index.js')

function sortByHeight(arr) {
	const sortedHeights = arr.filter(height => height !== -1).sort((a, b) => a - b)

	let index = 0
	return arr.map(height => (height === -1 ? -1 : sortedHeights[index++]))
}

module.exports = {
	sortByHeight,
}
