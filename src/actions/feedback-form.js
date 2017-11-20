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
 * @returns {Function}
 */
export function submitFeedback () {
	return (dispatch) => {
		dispatch(togglePanel());

		let theMessage = {
			type: 'success',
			title: 'Thank you for your feedback',
			content: ''
		};
		nNotification.show(theMessage);
	};
}
