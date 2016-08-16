import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LicenseDropdown from './../../components/license-dropdown';

class HeaderLicense extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const licenseProps = {
      dispatch: this.props.dispatch,
      licenseData: this.props.licenseData,
      mobile: this.props.mobile
    };

    return (
      <LicenseDropdown {...licenseProps} />
    );
  }
}

import { licenseDropdownPropTypes } from "../../reducers/license-dropdown";

HeaderLicense.propTypes = {
  mobile: PropTypes.bool,
  licenseData: PropTypes.shape(licenseDropdownPropTypes).isRequired
};

const mapStateToProps = (store) => {
  return {
    licenseData: store.KmtHeaderNs.licenseDropdown
  };
};

export default connect(mapStateToProps)(HeaderLicense);
