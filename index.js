import {Component } from 'react';

class KmtHeader extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="o-header-services o-header-services--b2b" data-o-component="o-header">
      <div className="o-header-services__top o-header-services__container">
        <div className="o-header-services__ftlogo"></div>
        <div className="o-header-services__title">
        <h1 className="o-header-services__product-name">B2B Tool or Service name</h1><span className="o-header-subrand__product-tagline ">Tagline to explain the product here</span>
        </div>
      </div>
    </header>
      );
  }

}

KmtHeader.propTypes = {};

export default KmtHeader;
