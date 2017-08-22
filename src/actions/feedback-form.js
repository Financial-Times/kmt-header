import nNotification from '@financial-times/n-notification';

/**
 * Toggles the panel
 * @returns {{type: String}}
 */
export function togglePanel () {
  return {
    type: 'F_TOGGLE'
  };
}

/**
 * Toggles feedback form valid state
 * @returns {{type: String}}
 */
export function toggleFeedbackValid () {
  return {
    type: 'F_TOGGLE_VALID'
  };
}

/**
 * Submit the user feedback
 * @param {String} theUrl
 * @param {Object} data
 * @returns {Function}
 */
export function submitFeedback (data) {
  return (dispatch, getState) => {
    // const theStore = getState();
    // if (typeof theStore.KmtHeaderNs.helpers.doRequest === 'function') {
      // const options = {method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }, 'mode': 'no-cors'};
      // theStore.KmtHeaderNs.helpers.doRequest(options).then(() => {
        dispatch(togglePanel());

        let theMessage = {
          type: 'success',
          title: 'Thank you for your feedback',
          content: ''
        };
        nNotification.show(theMessage);

      // }, () => {
      //
      // });
    // }
  };
}
