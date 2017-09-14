import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderNav from './../../components/header-nav';
import HeaderExtraActions from './../../components/header-extra-actions';

class HeaderDrawerContainer extends Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render () {
    return (
      <div className='o-header__drawer--services o-header__drawer o--if-js' id='o-header-drawer' data-o-header-drawer data-o-header-drawer--no-js>
        <div className='o-header__drawer-inner'>

          <div className='o-header__drawer-tools'>
            <h1 className='o-header-services__product-name o-header-services__product-name--drawer'>{this.props.headerTitle.label}</h1>
            <button type='button' className='o-header__drawer-tools-close' aria-controls='o-header-drawer'>
              <span className='o-header__visually-hidden'>Close</span>
            </button>
          </div>

          <HeaderNav mobile={true} menu={this.props.menu} flags={this.props.flags} licenceId={this.props.licenceId} />
          <HeaderExtraActions mobile={true} extraActions={this.props.extraActions} />

        </div>
      </div>
    );
  }
}

import { menuTypes } from '../../reducers/main-menu';
import { headerTitleTypes } from '../../reducers/header-title';
import { extraActionsTypes } from '../../reducers/extra-actions';

HeaderDrawerContainer.propTypes = {
  menu: PropTypes.shape(menuTypes).isRequired,
  headerTitle: PropTypes.shape(headerTitleTypes).isRequired,
  extraActions: PropTypes.shape(extraActionsTypes).isRequired
};

const mapStateToProps = (store) => {
  return {
    menu: store.KmtHeaderNs.mainMenu,
    headerTitle: store.KmtHeaderNs.headerTitle,
    extraActions: store.KmtHeaderNs.extraActions,
    flags: store.togglerFlags,
    licenceId: store.licenceId
  };
};

export default connect(mapStateToProps)(HeaderDrawerContainer);
