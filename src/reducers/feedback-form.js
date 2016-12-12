const defaultState = {
  isExpanded: false,
  submitFn: () => {}
};
const feedbackForm = (state = defaultState, action = {}) => {

  switch (action.type) {
    case "F_TOGGLE":
      state = Object.assign({}, state, {isExpanded: !state.isExpanded});
      break;
  }
  return state;
};

export default feedbackForm;
