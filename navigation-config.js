module.exports = (licence, selectedTab, path) => {
	const licenceId = licence || '';
	const items = [
		{
			name: 'Your Overview',
			href: `/overview/${licenceId}`,
			trackable: 'overview',
		},
		{
			name: 'Manage Users',
			href: `/users/${licenceId}`,
			trackable: 'users'
		},
		{
			name: 'Manage Groups',
			href: `/groups/${licenceId}`,
			trackable: 'groups'
		},
		{
			name: 'Select Topics',
			href: `/myft/${licenceId}`,
			trackable: 'content-distribution',
		},
		{
			name: 'Usage Insights',
			href: `/usage/${licenceId}`,
			trackable: 'usage-reports',
			showFlag: 'katUsagePage'
		},
		{
			name: 'Sign Out',
			href: 'https://www.ft.com/logout',
			trackable: 'sign-out',
			last: true
		}
	];
	const basePath = path || '';
	return {
		nav: {
			heading: 'Enterprise Tools',
			items: items.map(item => {
				item.selected = (item.trackable === selectedTab);
				return item;
			})
		},
		basePath
	};
};
