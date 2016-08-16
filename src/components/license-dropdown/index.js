import React, { Component, PropTypes } from 'react';
import Delegate from 'ftdomdelegate';
import viewport from 'o-viewport';

import { toggleDropdown, updateDropdownStyle } from "../../actions/license-dropdown";

class LicenseDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.positionDropdown = this.positionDropdown.bind(this);
    this.licenseChanged = this.licenseChanged.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);

    viewport.listenTo('resize');
    this.theDoc = new Delegate();
    this.theDoc.root(document.body);
    this.theDoc.on('oViewport.resize', 'body', this.onWindowResize);
  }

  componentDidUpdate (prevProps, prevState) {
    // if it's not in the mobile container AND if it needs to be shown AND if it was hidden
    if (this.props.mobile !== true && this.props.licenseData.show === true && prevProps.licenseData.show !== this.props.licenseData.show) {
      // calculate its position
      this.positionDropdown();
    }
  }

  toggleDropdown(e) {
    // toggle the dropdown
    this.props.dispatch(toggleDropdown());
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
    this.positionDropdown();
  }

  licenseChanged (e) {
    // TODO: active license needs to be changed
  }

  render() {
    const { licenseData } = this.props;

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
          <span className="kmt-header__license-user">{licenseData.username}</span>
          <span className="kmt-header__license-used"> ({licenseData.selected.label})</span>
        </div>
        <div className={dropdownCls} style={this.props.mobile !== true ? licenseData.style : {}}>
          <select className="o-forms-select" onChange={this.licenseChanged} defaultValue={licenseData.selected.value}>
            {
              licenseData.items.map((item, index) => {
                return <option value={item.value} key={index}>{item.label}</option>;
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
  licenseData: PropTypes.shape(licenseDropdownPropTypes).isRequired,
  mobile: PropTypes.bool
};

export default LicenseDropdown;
