import { PropTypes } from 'react';

export const menuTypes ={
  items: PropTypes.array,
  enableMobile: PropTypes.bool
};

export const itemsTypes ={
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool
};

const defaultState = {
  items: [
    {
      label: "DASHBOARD",
      attr: {
        href: "#"
      }
    },
    {
      label: "MY FT",
      active: true,
      attr: {
        href: "#"
      }
    },
    {
      label: "USERS",
      attr: {
        href: "#"
      }
    }
  ],
  enableMobile: true
};

const mainMenu = (state = defaultState, action = {}) => {
  return state;
};

export default mainMenu;
