import React, { Component, PropTypes } from 'react';
import Delegate from 'ftdomdelegate';
import viewport from 'o-viewport';
import oDom from 'o-dom';
import { toggleDropdown, updateDropdownStyle } from "../../actions/license-dropdown";
import { changeLicense } from "../../actions/license-change";
let componentEventsBound = false;

class LicenseDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.positionDropdown = this.positionDropdown.bind(this);
    this.licenseChanged = this.licenseChanged.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.trimLicenseId = this.trimLicenseId.bind(this);

    // because this uses the same state (no matter how many times it's used) we need to bind the events only once
    if (componentEventsBound !== true) {
      viewport.listenTo('resize');
      this.theDoc = new Delegate();
      this.theDoc.root(document.body);
      this.theDoc.on('oViewport.resize', 'body', this.onWindowResize);
      this.theDoc.on('click', 'body', this.handleBodyClick);

      componentEventsBound = true;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentDidUpdate (prevProps, prevState) {
    // if it's not in the mobile container AND if it needs to be shown AND if it was hidden
    if (this.props.mobile !== true && this.props.licenseData.show === true && prevProps.licenseData.show !== this.props.licenseData.show) {
      // calculate its position
      //this.positionDropdown();
    }
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

  positionDropdown() {
    // if it's not in the mobile container AND if it needs to be shown
    if (this.props.mobile !== true && this.props.licenseData.show === true) {
      const theWrapper = this.refs.theWrapper;

      // if the wrapper is found and visible
      if (theWrapper && theWrapper.offsetWidth > 0) {
        const theStyle = {};
        const containerPosition = theWrapper.getBoundingClientRect();
        const viewportWidth = viewport.getSize(true).width;
        // calculate the right position
        theStyle.right = viewportWidth - (containerPosition.left + theWrapper.offsetWidth);

        if (theStyle.right < 0) {
          theStyle.right = 0;
        }

        // if the right position has changed
        if (this.props.licenseData.style.right !== theStyle.right) {
          this.props.dispatch(updateDropdownStyle(theStyle));
        }
      }
    }
  }

  onWindowResize () {
    //this.positionDropdown();
  }

  licenseChanged (e) {
    // trigger a change action
    this.props.dispatch(changeLicense(e.target.value));

    // if the change function has been added
    if (this.props.changeFn) {
      this.props.changeFn(e);
    }
  }

  trimLicenseId(licenseId) {
    return `${licenseId.length > 10 ? "[...]" : ""}${licenseId.slice(-10)}`;
  }

  render() {
    const { licenseData } = this.props;

    // if there are no licenses
    if (licenseData.items.length === 0) {
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

    return (
      <div className={wrapperCls} ref="theWrapper">
        <div className="kmt-header__license-label" onClick={this.toggleDropdown}>
          <span className="kmt-header__license-used">{licenseData.selected.label}</span>
        </div>
        <div className={dropdownCls} style={this.props.mobile !== true ? licenseData.style : {}}>
          <select className="o-forms__select" onChange={this.licenseChanged} defaultValue={licenseData.selected.licenceId}>
            {
              licenseData.items.map((item, index) => {
                return <option value={item.licenceId} key={index}>{item.label} - {this.trimLicenseId(item.licenceId)}</option>;
              })
            }
          </select>
        </div>
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
