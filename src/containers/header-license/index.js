import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LicenseDropdown from './../../components/license-dropdown';

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
			licenseData: this.props.licenseData,
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
	licenseData: PropTypes.shape(licenseDropdownPropTypes).isRequired
};

const mapStateToProps = (store) => {
	return {
		licenseData: store.KmtHeaderNs.licenseDropdown,
		changeFn: store.KmtHeaderNs.licenseChange.changeFn
	};
};

export default connect(mapStateToProps)(HeaderLicense);
