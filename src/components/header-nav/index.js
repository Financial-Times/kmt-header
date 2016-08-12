import React, { Component, PropTypes } from 'react';

class HeaderNav extends Component {
  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);
  }

  createItem(item, index, liCls, aCls) {
    if (item.active === true) {
      aCls += ` ${aCls}--selected`;
    }
    return (
      <li className={liCls} key={index}>
        <a className={aCls} href={item.href}>{item.label}</a>
      </li>
    );
  }

  render() {
    const { menu } = this.props;

    if (menu.items === undefined) {
      return <div></div>;
    }

    let liCls = "o-header-services__nav-item";
    let aCls = "o-header-services__nav-link";

    if (this.props.mobile !== true) {
      return (
        <nav className='o-header-services__primary-nav'>
          <div className='o-header-services__container'>
            <ul className='o-header-services__nav-list'>
              {menu.items.map((item, index) => this.createItem(item, index, liCls, aCls))}
            </ul>
          </div>
        </nav>
      );
    }

    liCls = "o-header__drawer-menu-item";
    aCls = "o-header__drawer-menu-link";

    return (
      <nav className="o-header__drawer-menu o-header__drawer-menu--primary" role="navigation" aria-label="Primary navigation">
        <ul className="o-header__drawer-menu-list">
          {menu.items.map((item, index) => this.createItem(item, index, liCls, aCls))}
        </ul>
      </nav>
    );
  }
};

import { menuTypes } from "../../reducers/main-menu";

HeaderNav.propTypes = {
  mobile: PropTypes.bool,
  menu: PropTypes.shape(menuTypes).isRequired,
};

HeaderNav.defaultProps = {
};

export default HeaderNav;
