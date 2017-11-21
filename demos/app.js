const express = require('@financial-times/n-internal-tool');
const chalk = require('chalk');
const errorHighlight = chalk.bold.red;
const highlight = chalk.bold.green;

const app = module.exports = express({
	name: 'public',
	systemCode: 'kat-header-demo',
	withFlags: true,
	withHandlebars: true,
	withNavigation: false,
	withAnonMiddleware: false,
	hasHeadCss: false,
	viewsDirectory: '/demos',
	partialsDirectory: process.cwd(),
	directory: process.cwd(),
	demo: true,
	s3o: false
});

const navigation = {
	nav: {
		heading: {
			name: 'Knowledge & administration tools'
		},
		items: [
			{
				name: 'Overview',
				href: '#',
				selected: true,
			},
			{
				name: 'Content Distribution',
				href: '#',
			},
			{
				name: 'Usage Reports',
				href: '#',
			},
			{
				name: 'Licence Administration',
				href: '#'
			},
			{
				name: 'Groups',
				href: '#',
				flag: 'katGroupsManagement'
			},
			{
				name: 'Users',
				href: '#',
				flag: 'katUsersManagement'
			}
		]
	}
};

const data = {
	licenceList: [
		{
			name: 'Licence Number 1',
			contractId: 'contract1',
			licenceId: '#'
		},
		{
			name: 'Licence Number 2',
			contractId: 'contract2',
			licenceId: '#'
		},
	]
};

app.get('/', (req, res) => {
	res.render('demo', Object.assign({
		title: 'Test App'
	},
	Object.assign({}, navigation, data, { enableJS: true })));
});

app.get('/core', (req, res) => {
	res.render('demo', Object.assign({
		title: 'Test App'
	},
	Object.assign({}, navigation, data, { enableJS: false })));
});

function runPa11yTests () {
	const spawn = require('child_process').spawn;
	const pa11y = spawn('pa11y-ci');

	pa11y.stdout.on('data', (data) => {
		console.log(highlight(`${data}`)); //eslint-disable-line
	});

	pa11y.stderr.on('data', (error) => {
		console.log(errorHighlight(`${error}`)); //eslint-disable-line
	});

	pa11y.on('close', (code) => {
		process.exit(code);
	});
}

const listen = app.listen(5005);

if (process.env.PA11Y === 'true') {
	listen.then(runPa11yTests);
}
