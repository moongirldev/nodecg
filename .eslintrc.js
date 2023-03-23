module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	rules: {
		"@typescript-eslint/no-explicit-any": 0,
		'@typescript-eslint/no-non-null-assertion': 0,

		'@typescript-eslint/no-misused-promises': 1,

		'@typescript-eslint/restrict-template-expressions': 0,
		'@typescript-eslint/no-unsafe-argument': 0,
		'@typescript-eslint/no-unsafe-assignment': 0,
		'@typescript-eslint/no-unsafe-call': 0,
		'@typescript-eslint/no-unsafe-member-access': 0,
		'@typescript-eslint/no-unsafe-return': 0,
	},
};
