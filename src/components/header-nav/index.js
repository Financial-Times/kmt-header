import React, { Component, PropTypes } from 'react';

class HeaderNav extends Component {
  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);
    this.createMenuItems = this.createMenuItems.bind(this);
    this.createLastMenuItems = this.createLastMenuItems.bind(this);
    this.createMobileItem = this.createMobileItem.bind(this);

    this.liCls = "o-header-services__nav-item";
    this.aCls = "o-header-services__nav-link";
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  createItem(item, index, liCls, aCls) {
    if ( !item.last ) {
      if (item.active === true) {
        aCls += ` ${aCls}--selected`;
      }
      if (item.cls !== undefined) {
        aCls += ` ${item.cls}`;
      }
      return (
        <li className={liCls} key={index}>
          <a className={aCls} {...item.attrs} >{item.label}</a>
        </li>
      );
    }
  }

  createMobileItem(item, index, liCls, aCls) {

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
          <a className={aCls} {...item.attrs} >{item.label}</a>
        </li>
      );
  }

  createMenuItems(itemsArray){
    let menuItemsMarkup= [];
    let menuLastItemsMarkup= [];
    let anyLastElement = 0;
    let lastElements = [];
    let firstIndexOfLastElements = null;


    itemsArray.forEach((element, index) => {
      if (!element.last) {
        menuItemsMarkup.push(this.createItem(element, index, this.liCls, this.aCls));
      }
      else {
        lastElements.push(element);
        anyLastElement = 1;
        firstIndexOfLastElements = index;
      }
    });

    if (anyLastElement){
      lastElements.forEach((element, index)=>{
        menuLastItemsMarkup.push(this.createLastMenuItems(element, index, this.liCls, this.aCls));
      });
    }

    this.liCls += ` ${this.liCls}--last`;

    return (
      <ul className='o-header-services__nav-list kmt-text--transform-none'>
        {menuItemsMarkup}
        <li className={this.liCls} key={firstIndexOfLastElements}>
          {menuLastItemsMarkup}
        </li>
      </ul>
    );
  }

  createLastMenuItems(item, index, liCls, aCls) {
    if (item.active === true) {
      aCls += ` ${aCls}--selected`;
    }

    if (item.cls !== undefined) {
      aCls += ` ${item.cls}`;
    }

    return (
      <a className={aCls} key={index} {...item.attrs} >{item.label}</a>
    );
  }

  render() {
    const { menu } = this.props;
    // if there are no items
    if (menu.items === undefined) {
      return null;
    }

    const userLink = this.props.userLink;

    if (userLink.hasOwnProperty('label')) {
      let userLinkMenuItem = [{
        attrs: {href: userLink.href},
        label: userLink.label,
        last: true
      }];

      let userLinkInMenu = 0;

      //check for "my account" item
      menu.items.forEach((element)=>{
        if (element.label === "My Account" ){
          userLinkInMenu = 1;
        }
      });

      if (userLinkInMenu === 0) {
        let items = [...menu.items, ...userLinkMenuItem];
        menu.items = items;
      }
    }

    // if not for the mobile version
    if (this.props.mobile !== true) {

      return (
        <nav className='o-header-services__primary-nav'>
          <div className='o-header-services__container'>
            {this.createMenuItems(menu.items)}
          </div>
        </nav>
      );
    }

    // for the mobile version
    let liCls = "o-header__drawer-menu-item";
    let aCls = "o-header__drawer-menu-link";

    return (
      <nav className="o-header__drawer-menu o-header__drawer-menu--primary" role="navigation" aria-label="Primary navigation">
        <ul className="o-header__drawer-menu-list">
          {menu.items.map((item, index) => this.createMobileItem(item, index, liCls, aCls))}
        </ul>
      </nav>
    );
  }
};

import { menuTypes } from "../../reducers/main-menu";

HeaderNav.propTypes = {
  mobile: PropTypes.bool,
  menu: PropTypes.shape(menuTypes).isRequired
};

HeaderNav.defaultProps = {
};

export default HeaderNav;
