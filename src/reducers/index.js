import { combineReducers } from 'redux';
import mainMenu from './main-menu';
import headerTitle from './header-title';

const KmtHeaderApp = combineReducers({
  mainMenu,
  headerTitle
});

export default KmtHeaderApp;
