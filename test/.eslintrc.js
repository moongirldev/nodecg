module.exports = {
	extends: ['plugin:ava/recommended'],
	plugins: ['ava'],
	env: {
		browser: true,
	},
	parserOptions: {
		project: './test/tsconfig.json',
	},
	rules: {
		'ava/no-import-test-files': ['error', { files: ['test/**/*.js'] }],
		'ava/use-test': 0, // we have legitimate use cases for not doing this
		'@typescript-eslint/no-implicit-any-catch': 0, // too much of a hassle
		'@typescript-eslint/ban-ts-comment': 0, // too much of a hassle
	},
};
