import nNotification from 'n-notification';

/**
 * Toggles the panel
 * @returns {{type: String}}
 */
export function togglePanel() {
  return {
    type: "F_TOGGLE"
  };
}

/**
 * Submit the user feedback
 * @param {String} theUrl
 * @param {Object} data
 * @returns {Function}
 */
export function submitFeedback(theUrl, data) {
  return (dispatch, getState) => {
    const theStore = getState();
    if (typeof theStore.KmtHeaderNs.helpers.doRequest === "function") {
      const options = {method: "POST", body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }};
      theStore.KmtHeaderNs.helpers.doRequest(theUrl, options).then((response) => {
        dispatch(togglePanel());

        let theMessage = {
          type: 'success',
          title: 'Thank you for your feedback',
          content: ''
        };
        nNotification.show(theMessage);

      }, (error) => {

      });
    }
  };
}
