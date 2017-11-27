module.exports = (licence, selectedTab) => {
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
		},
		{
			name: 'Groups',
			href: `/groups/${licenceId}`,
			trackable: 'groups',
			flag: 'katGroupManagement'
		},
		{
			name: 'Users',
			href: `/users/${licenceId}`,
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
	return {
		nav: {
			heading: 'Knowledge & administration tools',
			items: items.map(item => {
				item.selected = (item.trackable === selectedTab);
				return item;
			})
		}
	};
};
