import React, { Component, PropTypes } from 'react';
import HeaderExtraActions from './../header-extra-actions';

class HeaderTop extends Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render () {
    const { headerTitle } = this.props;

    return (
      <div className='o-header-services__top o-header-services__container kmt-header__top'>

        {this.props.enableMobileMenu === true
          ? <div className='o--if-js o-header-services__hamburger'>
              <a className='o-header-services__hamburger-icon' href='#o-header-drawer' aria-controls='o-header-drawer'></a>
            </div>
          : null
        }

        <div className='o-header-services__ftlogo'></div>

        <div className='o-header-services__title'>
          <h1 className='o-header-services__product-name'>{headerTitle.label}</h1>
          {headerTitle.summary
            ? <span className='o-header-subrand__product-tagline'>{headerTitle.summary}</span>
            : null
          }
        </div>

        <HeaderExtraActions extraActions={this.props.extraActions} />

      </div>
    );
  }
};

import { headerTitleTypes } from '../../reducers/header-title';
import { extraActionsTypes } from '../../reducers/extra-actions';

HeaderTop.propTypes = {
  dispatch: PropTypes.func.isRequired,
  enableMobileMenu: PropTypes.bool,
  headerTitle: PropTypes.shape(headerTitleTypes).isRequired,
  extraActions: PropTypes.shape(extraActionsTypes).isRequired
};

export default HeaderTop;
