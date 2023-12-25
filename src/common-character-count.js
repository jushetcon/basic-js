const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let array1 = Array.from(s1)
	let array2 = Array.from(s2)
	let count = 0
	let commonCharacters = {}

	array1.forEach(char => {
		if (commonCharacters[char] !== undefined) {
			commonCharacters[char]++
		} else {
			commonCharacters[char] = 1
		}
	})

	array2.forEach(char => {
		if (commonCharacters[char] !== undefined && commonCharacters[char] > 0) {
			count++
			commonCharacters[char]--
		}
	})

	return count
}

module.exports = {
	getCommonCharacterCount,
}
