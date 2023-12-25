const { NotImplementedError } = require('../extensions/index.js')

function getDNSStats(domains) {
	const dnsStats = {}

	domains.forEach(domain => {
		const parts = domain.split('.').reverse() // Reverse the domain parts
		let currentDNS = ''

		parts.forEach(part => {
			currentDNS = `${currentDNS}.${part}`
			dnsStats[currentDNS] = (dnsStats[currentDNS] || 0) + 1
		})
	})

	return dnsStats
}

module.exports = {
	getDNSStats,
}
