module.exports = {
	nav: {
		heading: 'Knowledge & administration tools',
		items: [
			{
				name: 'Overview',
				href: '/overview',
				trackable: 'overview',
				selected: true,
			},
			{
				name: 'Content Distribution',
				href: '/myft',
				trackable: 'content-distribution',
			},
			{
				name: 'Usage Reports',
				href: '/usage',
				trackable: 'usage-reports',
			},
			{
				name: 'Licence Administration',
				href: '#', // TODO
				trackable: 'licence-admin',
			},
			{
				name: 'Groups',
				href: '/groups',
				trackable: 'groups',
				flag: 'katGroupManagement'
			},
			{
				name: 'Users',
				href: '/users',
				trackable: 'users',
				flag: 'katUsersManagement'
			},
			{
				name: 'My Account',
				href: 'https://myaccount.ft.com/',
				trackable: 'my-account',
				flag: 'katLicenceAdmin',
				last: true
			}
		]
	}
};
