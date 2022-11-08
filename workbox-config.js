module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};