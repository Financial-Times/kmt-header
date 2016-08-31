/**
 * Sort the licenses by the creation date
 * @param {Array} licenses
 * @returns {Array}
 * @private
 */
function _sortAndNameLicenses(licenses) {
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
    return Object.assign({}, license, {label: `License #${index + 1}`});
  });
}

/**
 * Gets the user details from the cookie
 * @returns {{}}
 */
export function getCookieUserDetails() {
  const licenceData = {};
  if (window.KMT_CONFIG) {
    licenceData.items = _sortAndNameLicenses(window.KMT_CONFIG.licenceList || []);
    licenceData.username = window.KMT_CONFIG.displayName || "Unknown User";

    if (window.LICENCE_ID) {
      licenceData.items.every((item) => {
        if (item.licenceId === window.LICENCE_ID) {
          licenceData.selected = item;
          return false;
        }
        return true;
      });
    }
  }
  return licenceData;
}
