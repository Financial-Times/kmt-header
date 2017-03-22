import { combineReducers } from 'redux';
import mainMenu from './main-menu';
import headerTitle from './header-title';
import licenseDropdown from './license-dropdown';
import extraActions from './extra-actions';
import licenseChange from './license-change';
import feedbackForm from './feedback-form';
import helpers from './helpers';
import linkUser from './link-user';

const mainReducers = {
  mainMenu,
  headerTitle,
  licenseDropdown,
  extraActions,
  licenseChange,
  feedbackForm,
  helpers,
  linkUser
};

// combine the app reducers
const KmtHeaderNs = combineReducers(mainReducers);

// create a namespace for this app store
const KmtHeaderApp = combineReducers(Object.assign({}, {KmtHeaderNs}));
export { KmtHeaderNs };
export default KmtHeaderApp;
