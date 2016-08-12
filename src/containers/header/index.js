import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderTop from './../../components/header-top';
import HeaderNav from './../../components/header-nav';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='o-header-services o-header-services--b2b' data-o-component='o-header'>
        <HeaderTop headerTitle={this.props.headerTitle} enableMobileMenu={this.props.menu.enableMobile} />
        <HeaderNav menu={this.props.menu} />
      </header>
    );
  }
}

import { menuTypes } from "../../reducers/main-menu";
import { headerTitleTypes } from "../../reducers/header-title";

HeaderContainer.propTypes = {
  menu: PropTypes.shape(menuTypes).isRequired,
  headerTitle: PropTypes.shape(headerTitleTypes).isRequired
};

const mapStateToProps = (store) => {
  return {
    menu: store.mainMenu,
    headerTitle: store.headerTitle
  };
};

export default connect(mapStateToProps)(HeaderContainer);
