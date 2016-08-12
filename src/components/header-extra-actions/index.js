import React, { Component, PropTypes } from 'react';

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
    const items = [
      {
        label: "Logout",
        href: "#"
      }
    ];

    let aCls = "o-header-services__related-content-link";

    if (this.props.mobile !== true) {
      return (
        <div className='o-header-services__related-content'>
          {items.map((item, index) => this.createItem(item, index, aCls))}
        </div>
      );
    }

    aCls = "o-header__drawer-menu-link";

    return (
      <nav className="o-header__drawer-menu o-header__drawer-menu--user" role="navigation" aria-label="User navigation">
        <ul className="o-header__drawer-menu-list">
          {
            items.map((item, index) => {
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

HeaderExtraActions.propTypes = {
  display: PropTypes.bool
};

HeaderExtraActions.defaultProps = {
};

export default HeaderExtraActions;
