module.exports = {
	files: {
		// by default all files are denied - you'll need to explicitly allow any files
		allow: [
			// full paths
			'.*\\/?\\.gitignore',
			'\\.npmignore',
			'.*\\.(js|html|scss|css|json|yml|yaml|md|sh|vcl|ts|snap)',
			'.*\\.(jpg|png|svg|gif|ico)',
			'Makefile',
			'n\\.Makefile',
			'index\\.mk',
			'Procfile',
			'\\.eslintignore',
			'\\.slugignore',
			'\\.bowerrc',
			'.*\\/\\.gitkeep',
			'\\.babelrc',
			'LICENSE',
			'.*\\.editorconfig',
			'index.hbs'
		],
		// deny certain files that are allowed above
		allowOverrides: [
			'package-lock.json'
		]
	},
	strings: {
		// unlike files, strings are more difficult to deny all and then allow
		// so be as exhaustive as possible with the deny rules here and then override (whitelist) false positives
		deny: [
			'[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}', // emails
			'[A-Z0-9]{20}', // AWS access key IDs
			'[A-Za-z0-9/\\\\+=]{40}', // AWS secret access keys
			'[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}', // UUIDs - see [0]
			'[a-z0-9]{24}',
			'[a-z0-9]{32}',
			'[a-z0-9]{40}',
			'[A-Za-z0-9]{21}', // [1]
			'[A-Za-z0-9]{32}', // [2]
			'[A-Za-z0-9]{40}', // [3]
			'[A-Za-z0-9]{80}' // [4]
		],
		// allow certain strings that are denied above
		denyOverrides: [
			'[A-Z0-9a-z._%+-]+@ft\\.com', // FT.com emails
			'git@github\\.com', // Github clone command
			'[A-Za-z/\\\\+=]{40}', // disable AWS secret access keys rule if no digits
			'[a-z0-9/\\\\+=]{40}', // disable AWS secret access keys rule if no uppercase
			'[A-Z0-9/\\\\+=]{40}', // disable AWS secret access keys rule if no lowercase
			'00000000-0000-0000-0000-[0-9]{12}', // dummy UUIDs - disables [0] if all but last component are zeroes and last component is digit-only
			'[A-Za-z]{21}', // disable [1] if no digits (e.g., long function or variable names)
			'[A-Za-z]{32}', // ditto but for [2]
			'[A-Za-z]{40}', // and [3]
			'[A-Za-z]{80}' // and [4]
		]
	}
};
