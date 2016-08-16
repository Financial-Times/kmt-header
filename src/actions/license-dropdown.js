/**
 * Toggle the license dropdown
 * @returns {{type: String}}
 */
export function toggleDropdown() {
  return {
    type: "KMT_LD_TOGGLE"
  };
}

/**
 * Update the dropdown style
 * @param {Object} style
 * @returns {{type: String, style: Object}}
 */
export function updateDropdownStyle(style) {
  return {
    type: "KMT_LD_UPDATE_STYLE",
    style
  };
}
