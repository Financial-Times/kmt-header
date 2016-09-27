import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderTop from './../../components/header-top';
import HeaderNav from './../../components/header-nav';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render() {
    const headerTopProps = {
      dispatch: this.props.dispatch,
      headerTitle: this.props.headerTitle,
      enableMobileMenu: this.props.menu.enableMobile,
      extraActions: this.props.extraActions
    };

    return (
      <header className='o-header-services o-header-services--b2b' data-o-component='o-header'>
        <HeaderTop {...headerTopProps} />
        <HeaderNav menu={this.props.menu} />
      </header>
    );
  }
}

import { menuTypes } from "../../reducers/main-menu";
import { headerTitleTypes } from "../../reducers/header-title";
import { extraActionsTypes } from "../../reducers/extra-actions";

HeaderContainer.propTypes = {
  menu: PropTypes.shape(menuTypes).isRequired,
  headerTitle: PropTypes.shape(headerTitleTypes).isRequired,
  extraActions: PropTypes.shape(extraActionsTypes).isRequired
};

const mapStateToProps = (store) => {
  return {
    menu: store.KmtHeaderNs.mainMenu,
    headerTitle: store.KmtHeaderNs.headerTitle,
    extraActions: store.KmtHeaderNs.extraActions
  };
};

export default connect(mapStateToProps)(HeaderContainer);
