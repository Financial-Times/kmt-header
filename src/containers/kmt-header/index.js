import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderContainer from './../header';
import HeaderDrawerContainer from './../header-drawer';

class KmtHeaderContainer extends Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentDidMount () {
    if(this.header) {
      const OHeader = require('o-header');
      new OHeader(this.header);
    }
  }

  render () {
    return (
      <div ref={el => this.header = el}>
        <HeaderContainer />
        {this.props.enableMobileMenu === true
          ? <HeaderDrawerContainer />
          : null
        }
      </div>
    );
  }
}

KmtHeaderContainer.propTypes = {
  enableMobileMenu: PropTypes.bool
};

const mapStateToProps = (store) => {
  return {
    enableMobileMenu: store.KmtHeaderNs.mainMenu.enableMobile
  };
};

export default connect(mapStateToProps)(KmtHeaderContainer);
