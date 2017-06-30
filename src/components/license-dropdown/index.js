import React, { Component, PropTypes } from 'react';
import Delegate from 'ftdomdelegate';
import oDom from 'o-dom';
import { toggleDropdown } from "../../actions/license-dropdown";
import { changeLicense } from "../../actions/license-change";
let componentEventsBound = false;

class LicenseDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.licenseChanged = this.licenseChanged.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.trimLicenseId = this.trimLicenseId.bind(this);

    // because this uses the same state (no matter how many times it's used) we need to bind the events only once
    if (componentEventsBound !== true) {
      this.theDoc = new Delegate();
      this.theDoc.root(document.body);
      this.theDoc.on('click', 'body', this.handleBodyClick);

      componentEventsBound = true;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  toggleDropdown(e) {
    // toggle the dropdown
    this.props.dispatch(toggleDropdown());
  }

  handleBodyClick (e) {
    // if the dropdown is shown and if the click target is not in the dropdown container
    if (this.props.licenseData.show === true && !oDom.getClosestMatch(e.target, ".kmt-header__license-wrapper")) {
      this.toggleDropdown(e);
    }
  }

  licenseChanged (e) {
    // trigger a change action
    this.props.dispatch(changeLicense(e.target.value));

    // if the change function has been added
    if (this.props.changeFn) {
      this.props.changeFn(e);
    }
  }

  //trimLicenseId(licenseId) {
  //  return `${licenseId.length > 10 ? "[...]" : ""}${licenseId.slice(-10)}`;
  //}

  render() {
    const { licenseData } = this.props;
    let licenseDataLength = licenseData.items.length;
    // if there are no licenses
    if (licenseDataLength === 0) {
      return null;
    }

    let dropdownCls = "kmt-header__license-dropdown";
    if (licenseData.show === true) {
      dropdownCls += ` ${dropdownCls}--expanded`;
    }

    let wrapperCls = "kmt-header__license-wrapper";
    if (this.props.mobile === true) {
      wrapperCls += ` ${wrapperCls}--mobile`;
    }
    let kmtHeaderLicenseLabel= "";
    let className ="";
    licenseDataLength > 1 ? kmtHeaderLicenseLabel = "kmt-header__license-label" : kmtHeaderLicenseLabel = "kmt-header__license-label--noIcon";

    return (

      <div className={wrapperCls} ref="theWrapper">
        <div className={kmtHeaderLicenseLabel} onClick={this.toggleDropdown}>
          <span className="kmt-header__license-used">{licenseData.selected.label}</span>
        </div>
      {
        (licenseDataLength > 1) ?
          <div className={dropdownCls} style={this.props.mobile !== true ? licenseData.style : {}}>
            <select size={licenseDataLength <= 4 ? licenseDataLength : 4} className="o-forms__select kmt-forms__select" onChange={this.licenseChanged} >
              {
                licenseData.items.map((item, index) => {
                  licenseData.selected.licenceId === item.licenceId ? className = "kmt-forms-option--selected" : className = null;
                  return <option value={item.licenceId} key={index} className={className}>{item.label}</option>;
                })
              }
            </select>
          </div>
          :
          null
      }
      </div>
    );
  }
};

import { licenseDropdownPropTypes } from "../../reducers/license-dropdown";

LicenseDropdown.propTypes = {
  dispatch: PropTypes.func.isRequired,
  changeFn: PropTypes.func,
  licenseData: PropTypes.shape(licenseDropdownPropTypes).isRequired,
  mobile: PropTypes.bool
};

export default LicenseDropdown;
