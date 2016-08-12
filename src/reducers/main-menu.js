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
      href: "#"
    },
    {
      label: "MY FT",
      href: "#",
      active: true
    },
    {
      label: "USERS",
      href: "#"
    }
  ],
  enableMobile: true
};

const mainMenu = (state = defaultState, action = {}) => {

  return state;
};

export default mainMenu;
