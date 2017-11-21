const oHeader = require('o-header');

module.exports = {
	init: function init () {
		oHeader.init();

		const licenceSwitchers = [
			document.getElementById('licenceSwitcher'),
			document.getElementById('licenceSwitcherDrawer')
		];

		licenceSwitchers.forEach(switcher => {
			switcher.addEventListener('change', event => {
				event.preventDefault();
				const currentPath = location.pathname;
				const newLicenceSelection = event.target.value;
				let newPath = currentPath.split('/');
				newPath[2] = newLicenceSelection;
				newPath = newPath.join('/');

				location.pathname = newPath;
			});
		});
	}
};
