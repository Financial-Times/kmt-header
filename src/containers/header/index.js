import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'o-header';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    console.log(Header.toString());
    Header.init();
  }

  render() {
    return (
      <div>
        <header className='o-header-services o-header-services--b2b' data-o-component='o-header'>
          <div className='o-header-services__top o-header-services__container'>
            <div className='o--if-js o-header-services__hamburger'>
              <a className='o-header-services__hamburger-icon' href="#o-header-drawer" aria-controls="o-header-drawer"></a>
            </div>
            <div className='o-header-services__ftlogo'></div>
            <div className='o-header-services__title'>
              <h1 className='o-header-services__product-name'>Tool or Service name</h1>
              <span className='o-header-subrand__product-tagline'>Tagline to explain the product here</span>
            </div>
            <div className='o-header-services__related-content'>
              <a className='o-header-services__related-content-link' href='#'>XXXX</a>
              <a className='o-header-services__related-content-link' href='#'>Sign in</a>
            </div>
          </div>
          <nav className='o-header-services__primary-nav'>
            <div className='o-header-services__container'>
              <ul className='o-header-services__nav-list'>
                <li className='o-header-services__nav-item'>
                  <a className="o-header-services__nav-link o-header-services__nav-link--selected" href='#'>Nav item 1</a>
                </li>
                <li className='o-header-services__nav-item'>
                  <a className="o-header-services__nav-link" href='#'>Nav item 2</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="o-header__drawer--services o-header__drawer o--if-js" id="o-header-drawer" data-o-header-drawer data-o-header-drawer--no-js>
          <div className="o-header__drawer-inner">
            <div className="o-header__drawer-tools">
              <span>Tool or Service name</span>
              <button type="button" className="o-header__drawer-tools-close" aria-controls="o-header-drawer">
                <span className="o-header__visually-hidden">Close</span>
              </button>
            </div>
            <nav className="o-header__drawer-menu o-header__drawer-menu--primary" role="navigation" aria-label="Primary navigation">
              <ul className="o-header__drawer-menu-list">
                <li className='o-header__drawer-menu-item'>
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--selected" href='#'>Nav item 1</a>
                </li>
                <li className='o-header__drawer-menu-item'>
                  <a className="o-header__drawer-menu-link" href='#'>Nav item 1</a>
                </li>
              </ul>
            </nav>
            <nav className="o-header__drawer-menu o-header__drawer-menu--user" role="navigation" aria-label="User navigation">
              <ul className="o-header__drawer-menu-list">
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link" href="#">XXXX</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link" href="#">Sign in</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

HeaderContainer.propTypes = {

};

const mapStateToProps = (store) => {
  return {

  };
};

export default connect(mapStateToProps)(HeaderContainer);
