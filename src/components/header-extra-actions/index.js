import React, { Component, PropTypes } from 'react';
import HeaderLicense from './../../containers/header-license';

class HeaderExtraActions extends Component {
  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);
  }

  createItem(item, index, aCls) {
    return (
      <a className={aCls} href={item.href} key={index}>{item.label}</a>
    );
  }

  render() {
    const { extraActions } = this.props;
    let aCls = "o-header-services__related-content-link";

    // if not for the mobile version
    if (this.props.mobile !== true) {
      return (
        <div className='o-header-services__related-content'>
          <a className="o-header-services__related-content-link">
            <HeaderLicense />
          </a>
          {extraActions.items.map((item, index) => this.createItem(item, index, aCls))}
        </div>
      );
    }

    // for the mobile version
    aCls = "o-header__drawer-menu-link";
    return (
      <nav className="o-header__drawer-menu o-header__drawer-menu--user" role="navigation" aria-label="User navigation">
        <ul className="o-header__drawer-menu-list">
          <li className="o-header__drawer-menu-item">
            <a className="o-header__drawer-menu-link">
              <HeaderLicense mobile={this.props.mobile} />
            </a>
          </li>
          {
            extraActions.items.map((item, index) => {
              return (
                <li className="o-header__drawer-menu-item" key={index}>
                  {this.createItem(item, index, aCls)}
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
};

import { extraActionsTypes } from "../../reducers/extra-actions";

HeaderExtraActions.propTypes = {
  mobile: PropTypes.bool,
  extraActions: PropTypes.shape(extraActionsTypes).isRequired
};

export default HeaderExtraActions;
