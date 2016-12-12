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
    if (theStore.KmtHeaderNs && theStore.KmtHeaderNs.feedbackForm && typeof theStore.KmtHeaderNs.feedbackForm.submitFn === "function") {
      theStore.KmtHeaderNs.feedbackForm.submitFn(theUrl, data);
    }
    //const options = {method: "POST", body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }};
    //
    //doRequest(theUrl, options).then((response) => {
    //
    //  dispatch(togglePanel());
    //
    //  let theMessage = {
    //    type: 'success',
    //    title: 'Thanks for your feedback',
    //    content: ''
    //  };
    //  nNotification.show(theMessage);
    //
    //}, (error) => {
    //
    //});
  };
}
