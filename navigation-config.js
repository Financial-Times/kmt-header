module.exports = (licence, selectedTab, path) => {
	const licenceId = licence || '';
	const items = [
		{
			name: 'Overview',
			href: `/overview/${licenceId}`,
			trackable: 'overview',
		},
		{
			name: 'Content Distribution',
			href: `/myft/${licenceId}`,
			trackable: 'content-distribution',
		},
		{
			name: 'Usage Reports',
			href: `/usage/${licenceId}`,
			trackable: 'usage-reports',
		},
		{
			name: 'Licence Administration',
			href: `https://licence-admin.ft.com/licences/${licenceId}/users`,
			trackable: 'licence-admin',
			hideFlag: 'katUsersManagement'
		},
		{
			name: 'User Management',
			href: `/users/${licenceId}`,
			trackable: 'users',
			showFlag: 'katUsersManagement'
		},
		{
			name: 'Groups',
			href: `/groups/${licenceId}`,
			trackable: 'groups',
			showFlag: 'katGroupManagement'
		},
		{
			name: 'My Account',
			href: 'https://myaccount.ft.com/',
			trackable: 'my-account',
			showFlag: 'katLicenceAdmin',
			last: true
		}
	];
	const basePath = path || '';
	return {
		nav: {
			heading: 'Knowledge & administration tools',
			items: items.map(item => {
				item.selected = (item.trackable === selectedTab);
				return item;
			})
		},
		basePath
	};
};
