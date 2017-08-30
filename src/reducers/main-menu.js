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
      label: 'OVERVIEW',
      attrs: {
        tracking: 'dashboard',
        href: 'https://kat.ft.com/overview'
      }
    },
    {
      label: 'CONTENT DISTRIBUTION',
      attrs: {
        tracking: 'myFT',
        href: 'https://kat.ft.com/myft'
      }
    },
    {
      label: 'REPORTS',
      attrs: {
        tracking: 'report',
        href: 'https://kat.ft.com/usage'
      }
    },
    {
      label: 'USER MANAGEMENT',
      attrs: {
        tracking: 'users',
        href: 'https://kat.ft.com/users'
      }
    },
    {
      label: 'GROUPS',
      active: true,
      attrs: {
        tracking: 'groups',
        href: 'https://kat.ft.com/groups'
      }
    },
    {
      label: 'Feedback',
      attrs: {
        tracking: 'feedback',
        href: '#'
      },
      cls: 'kat-feedback__btn',
      last: true
    },
    {
      label: 'My Account',
      attrs: {
        tracking: 'my-account',
        href: 'https://myaccount.ft.com/'
      },
      last: true
    }
  ],
  enableMobile: true
};

const mainMenu = (state = defaultState) => {
  return state;
};

export default mainMenu;
