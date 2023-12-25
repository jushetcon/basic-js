const { NotImplementedError } = require('../extensions/index.js')

function repeater(str, options) {
	str = String(str)

	const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options

	const repeatedAddition = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator)

	const repeatedStr = new Array(repeatTimes).fill(str + repeatedAddition).join(separator)

	return repeatedStr
}

const result = repeater('STRING', {
	repeatTimes: 3,
	separator: '**',
	addition: 'PLUS',
	additionRepeatTimes: 3,
	additionSeparator: '00',
})

module.exports = {
	repeater,
}
