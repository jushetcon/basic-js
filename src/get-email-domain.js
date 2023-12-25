const { NotImplementedError } = require('../extensions/index.js')

function getEmailDomain(email) {
	const match = email.match(/@([^@]+)$/)

	return match ? match[1] : null
}

module.exports = {
	getEmailDomain,
}
