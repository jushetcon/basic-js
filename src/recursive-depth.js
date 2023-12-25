const { NotImplementedError } = require('../extensions/index.js')

class DepthCalculator {
	calculateDepth(arr) {
		if (!Array.isArray(arr)) {
			return 0
		}

		let depth = 1

		for (const item of arr) {
			if (Array.isArray(item)) {
				depth = Math.max(depth, 1 + this.calculateDepth(item))
			}
		}

		return depth
	}
}

module.exports = {
	DepthCalculator,
}
