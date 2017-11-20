let licenceData = undefined;

/**
 * Sort the licenses by the creation date
 * @param {Array} licenses
 * @returns {Array}
 * @private
 */
function _sortAndNameLicenses (licenses) {
	// sort the array by the creationDate
	// TODO: creationDate key might need to be changed
	licenses.sort((item1, item2) => {
		if (item1.creationDate < item2.creationDate) {
			return -1;
		}

		if (item1.creationDate > item2.creationDate) {
			return 1;
		}
		return 0;
	});

	return licenses.map((license, index) => {
		let theLabel = `License #${index + 1}`;
		if (license.name && license.name.trim() !== '') {
			theLabel = `${license.contractId} - ${license.name}`;
		}
		return Object.assign({}, license, {label: theLabel});
	});
}

/**
 * Gets the user details from the cookie
 * @returns {{}}
 */
export function getCookieUserDetails (katConfig, licenceId) {
	// if the data has not been retrieved
	// if (licenceData === undefined) { - not sure why we needed it here
		licenceData = {};
		if (katConfig) {
			licenceData.items = _sortAndNameLicenses(katConfig.licenceList || []);
			licenceData.username = katConfig.displayName || 'Unknown User';

			if (licenceId) {
				licenceData.items.every((item) => {
					if (item.licenceId === licenceId) {
						licenceData.selected = item;
						return false;
					}
					return true;
				});
			}
		// }
	} else {
		licenceData.items = [];
		licenceData.username = 'Unknown User';
	}
	return licenceData;
}
