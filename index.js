module.exports = {
	init: function init () {
		const licenceSwitcher = document.getElementById('licenceSwitcher');

		licenceSwitcher && licenceSwitcher.addEventListener('change', event => {
			event.preventDefault();
			const currentPath = location.pathname;
			const newLicenceSelection = event.target.value;
			const newPath = currentPath.split('/');
			newPath[2] = newLicenceSelection;
			newPath.join('/');

			location.pathname = newPath;
		});
	}
};
