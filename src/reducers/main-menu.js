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
      label: 'DASHBOARD',
      attrs: {
        'data-trackable': 'dashboard',
        href: '#'
      }
    },
    {
      label: 'CONTENT DISTRIBUTION',
      active: true,
      attrs: {
        'data-trackable': 'myFT',
        href: '#'
      }
    },
    {
      label: 'REPORTS',
      attrs: {
        'data-trackable': 'report',
        href: '#'
      }
    },
    {
      label: 'USER MANAGEMENT',
      attrs: {
        'data-trackable': 'users',
        href: '#'
      }
    },
    {
      label: 'GROUPS',
      attrs: {
        'data-trackable': 'groups',
        href: '#'
      }
    },
    {
      label: 'Feedback',
      attrs: {
        'data-trackable': 'feedback',
        href: '#'
      },
      cls: 'kat-feedback__btn',
      last: true
    },
    {
      label: 'My Account',
      attrs: {
        'data-trackable': 'my-account',
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
