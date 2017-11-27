const defaultItems = [
	{
		name: 'Overview',
		href: '/overview',
		trackable: 'overview',
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
];

module.exports = (selectedTab) => {
	return {
		nav: {
			heading: 'Knowledge & administration tools',
			items: defaultItems.map(item => {
				item.selected = (item.trackable === selectedTab);
				return item;
			})
		}
	};
};
