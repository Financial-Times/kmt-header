import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'o-header';
import HeaderContainer from './../header';
import HeaderDrawerContainer from './../header-drawer';

class KmtHeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    Header.init();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        {this.props.enableMobileMenu === true
          ? <HeaderDrawerContainer />
          : ""
        }
      </div>
    );
  }
}

KmtHeaderContainer.propTypes = {
  enableMobileMenu: PropTypes.bool,
};

const mapStateToProps = (store) => {
  return {
    enableMobileMenu: store.KmtHeaderNs.mainMenu.enableMobile
  };
};

export default connect(mapStateToProps)(KmtHeaderContainer);
