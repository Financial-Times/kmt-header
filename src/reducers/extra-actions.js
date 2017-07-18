import { PropTypes } from 'react';
export const extraActionsTypes ={
  items: PropTypes.array
};
const initialState = {
  items: [

  ]
};

const defaultState = Object.assign({}, initialState, {items : [ ...initialState.items]});

const extraActions = (state = defaultState) => {
  return state;
};

export default extraActions;
