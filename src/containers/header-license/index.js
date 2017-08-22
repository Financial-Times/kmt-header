import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LicenseDropdown from './../../components/license-dropdown';

import { getCookieUserDetails } from './../../helpers/helpers';

class HeaderLicense extends Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render () {
    const licenseProps = {
      dispatch: this.props.dispatch,
      cookieUserDetails: getCookieUserDetails(this.props.katConfig, this.props.licenceId),
      licenceData: this.props.licenceData,
      changeFn: this.props.changeFn,
      mobile: this.props.mobile
    };

    return (
      <LicenseDropdown {...licenseProps} />
    );
  }
}

import { licenseDropdownPropTypes } from '../../reducers/license-dropdown';

HeaderLicense.propTypes = {
  changeFn: PropTypes.func,
  mobile: PropTypes.bool,
  licenceData: PropTypes.shape(licenseDropdownPropTypes).isRequired
};

const mapStateToProps = (store) => {
  return {
    changeFn: store.KmtHeaderNs.licenseChange.changeFn,
    licenceData: store.KmtHeaderNs.licenseDropdown,
    katConfig: store.katConfig,
    licenceId: store.licenceId
  };
};

export default connect(mapStateToProps)(HeaderLicense);
