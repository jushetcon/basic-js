const { NotImplementedError } = require('../extensions/index.js')

function createDreamTeam(members) {
	if (!Array.isArray(members)) {
		return false
	}

	const initials = members.filter(member => typeof member === 'string').map(member => member.trim()[0].toUpperCase())

	const dreamTeamName = initials.sort().join('')

	return dreamTeamName
}
module.exports = {
	createDreamTeam,
}
