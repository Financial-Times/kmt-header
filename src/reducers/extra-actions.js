import { PropTypes } from 'react';
import { getCookieUserDetails } from './../helpers/helpers';

// get the user details from the cookies
const cookieUserDetails = getCookieUserDetails();

export const extraActionsTypes ={
  items: PropTypes.array
};

const initialState = {
  items: [
    {
      label: "Sign out",
      href: "https://accounts.ft.com/logout"
    }
  ]
};

let userLink = {};
if (cookieUserDetails.username) {
  userLink = {
    label: cookieUserDetails.username,
    href: "https://myaccount.ft.com/"
  };
}

// add an extra item to the links
const defaultState = Object.assign({}, initialState, {items : [userLink, ...initialState.items]});

const extraActions = (state = defaultState, action = {}) => {
  return state;
};

export default extraActions;
