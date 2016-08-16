import { combineReducers } from 'redux';
import mainMenu from './main-menu';
import headerTitle from './header-title';

const mainReducers = {
  mainMenu,
  headerTitle
};

// combine the app reducers
const KmtHeaderNs = combineReducers(mainReducers);

// create a namespace for this app store
const KmtHeaderApp = combineReducers(Object.assign({}, {KmtHeaderNs}));

export { KmtHeaderNs };
export default KmtHeaderApp;
