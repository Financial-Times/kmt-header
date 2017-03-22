import { getCookieUserDetails } from './../helpers/helpers';

const cookieUserDetails = getCookieUserDetails();

const initialState = {
  userLink: {

  }
};

let userLink = {};

if (cookieUserDetails.username) {
  userLink = {
    label: cookieUserDetails.username,
    href: "https://myaccount.ft.com/"
  };
}

const defaultState = Object.assign({}, initialState.userLink, userLink );

const linkUser = (state = defaultState, action = {}) => {
  return state;
};

export default linkUser;
