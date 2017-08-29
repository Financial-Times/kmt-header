import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { togglePanel } from './../../actions/feedback-form';

class HeaderNav extends Component {
  constructor (props) {
    super(props);

    this.createItem = this.createItem.bind(this);
  }

  shouldComponentUpdate (nextProps) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  createItem (item, index, liCls, aCls) {
    if (this.props.flags && (item.label === 'GROUPS' && !this.props.flags.groups)) {
      return null;
    } else if (this.props.flags && (item.label === 'USER MANAGEMENT' && !this.props.flags.users)) {
      return (
        <li className={liCls} key={index}>
          <a className={aCls} href='https://licence-admin.ft.com/licences/' >
            LICENCE ADMINISTRATION
          </a>
        </li>
      );
    } else {
      if (item.active === true) {
        aCls += ` ${aCls}--selected`;
      }
      if (item.last === true) {
        liCls += ` ${liCls}--last`;
      }
      if (item.cls !== undefined) {
        aCls += ` ${item.cls}`;
      }
      return (
        <li className={liCls} key={index}>
          <a className={aCls} {...item.attrs}
              onClick={(e) => this.handleClickOnFeedback(e, item.cls)}
              data-trackable={(item.cls === 'kat-feedback__btn') ? 'feedback' : null} >
                {item.label}
          </a>
        </li>
      );
    }
  }

  handleClickOnFeedback (e, cls) {
    if (cls === 'kat-feedback__btn') {
      e.preventDefault();
      this.props.dispatch(togglePanel());
    }
  }

  render () {
    const { menu } = this.props;
    // if there are no items
    if (menu.items === undefined) {
      return null;
    }

    let liCls = 'o-header-services__nav-item';
    let aCls = 'o-header-services__nav-link';

    const lastItems = [];
    let allItems = menu.items.filter(item => {
      if (item.last === true) {
        lastItems.push(item);
        return false;
      }
      return true;
    });

    allItems = allItems.concat(lastItems.reverse());

    // if not for the mobile version
    if (this.props.mobile !== true) {
      return (
        <nav className='o-header-services__primary-nav'>
          <div className='o-header-services__container'>
            <ul className='o-header-services__nav-list kmt-text--transform-none'>
              {allItems.map((item, index) => this.createItem(item, index, liCls, aCls))}
            </ul>
          </div>
        </nav>
      );
    }

    // for the mobile version
    liCls = 'o-header__drawer-menu-item';
    aCls = 'o-header__drawer-menu-link';
    return (
      <nav className='o-header__drawer-menu o-header__drawer-menu--primary' role='navigation' aria-label='Primary navigation'>
        <ul className='o-header__drawer-menu-list'>
          {menu.items.map((item, index) => this.createItem(item, index, liCls, aCls))}
        </ul>
      </nav>
    );
  }
};

import { menuTypes } from '../../reducers/main-menu';

HeaderNav.propTypes = {
  mobile: PropTypes.bool,
  menu: PropTypes.shape(menuTypes).isRequired
};

HeaderNav.defaultProps = {
};

export default HeaderNav;
