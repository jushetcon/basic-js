const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730
const k = 0.693 / HALF_LIFE_PERIOD

function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string') {
		return false
	}

	const numericActivity = parseFloat(sampleActivity)

	if (isNaN(numericActivity) || numericActivity <= 0 || numericActivity > MODERN_ACTIVITY) {
		return false
	}

	const age = Math.ceil(Math.log(MODERN_ACTIVITY / numericActivity) / k)
	return age
}

module.exports = {
	dateSample,
}
