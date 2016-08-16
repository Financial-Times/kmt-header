import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderNav from './../../components/header-nav';
import HeaderExtraActions from './../../components/header-extra-actions';

class HeaderDrawerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="o-header__drawer--services o-header__drawer o--if-js" id="o-header-drawer" data-o-header-drawer data-o-header-drawer--no-js>
        <div className="o-header__drawer-inner">

          <div className="o-header__drawer-tools">
            <span>Tool or Service name</span>
            <button type="button" className="o-header__drawer-tools-close" aria-controls="o-header-drawer">
              <span className="o-header__visually-hidden">Close</span>
            </button>
          </div>

          <HeaderNav mobile={true} menu={this.props.menu} />
          <HeaderExtraActions mobile={true} />

        </div>
      </div>
    );
  }
}

import { menuTypes } from "../../reducers/main-menu";
import { headerTitleTypes } from "../../reducers/header-title";

HeaderDrawerContainer.propTypes = {
  menu: PropTypes.shape(menuTypes).isRequired,
  headerTitle: PropTypes.shape(headerTitleTypes).isRequired
};

const mapStateToProps = (store) => {
  return {
    menu: store.KmtHeaderNs.mainMenu,
    headerTitle: store.KmtHeaderNs.headerTitle
  };
};

export default connect(mapStateToProps)(HeaderDrawerContainer);
