import React, { Component, PropTypes } from 'react';
// import Delegate from 'ftdomdelegate';
// import viewport from 'o-viewport';
// import oDom from 'o-dom';
import { toggleDropdown, updateDropdownStyle, updateFilterStr } from '../../actions/license-dropdown';
import { changeLicense } from '../../actions/license-change';
let componentEventsBound = false;

class LicenseDropdown extends Component {
  constructor (props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.licenseChanged = this.licenseChanged.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    //this.trimLicenseId = this.trimLicenseId.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.positionDropdown = this.positionDropdown.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.filterLicences = this.filterLicences.bind(this);

    // because this uses the same state (no matter how many times it's used) we need to bind the events only once
    if (componentEventsBound !== true) {
      // this.theDoc = new Delegate();
      // this.theDoc.root(document.body);
      // this.theDoc.on('click', 'body', this.handleBodyClick);
      // viewport.listenTo('resize');
      // this.theDoc.on('oViewport.resize', 'body', this.onWindowResize);

      componentEventsBound = true;
    }
  }

  shouldComponentUpdate (nextProps) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentDidUpdate () {
    if (this.props.licenceData.show === true) {
      const filter = this.refs.licenceFilter;
      // if the filter field is visible
      if (filter && filter.getBoundingClientRect().left > 0) {
        this.positionDropdown();
        filter.focus();
      }
    }
  }

  componentDidMount() {
		window.addEventListener('resize', this.onWindowResize);
		this.onWindowResize();
	}

  toggleDropdown () {
    // toggle the dropdown
    this.props.dispatch(toggleDropdown());
  }

  handleBodyClick (e) {
    // if the dropdown is shown and if the click target is not in the dropdown container
    // if (this.props.licenceData.show === true && !oDom.getClosestMatch(e.target, '.kmt-header__license-wrapper')) {
    //   this.toggleDropdown(e);
    // }
    if (this.props.licenceData.show === true) {
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
  //  return `${licenseId.length > 10 ? '[...]' : ''}${licenseId.slice(-10)}`;
  //}

  onWindowResize () {
    // check for the suggestion position when the window resizes
    this.positionDropdown();
  }

  positionDropdown () {
    if (this.props.licenceData.show === true) {
      const theStyle = {};
      const licenceDropdown = this.refs.licenceDropdown;

      if (licenceDropdown) {
        // reset the position so we can calculate
        const oldRight = licenceDropdown.style.right;
        licenceDropdown.style.right = null;

        // if the dropdown becomes offset
        // if (licenceDropdown.getBoundingClientRect().right >= viewport.getSize().width) {
        //   theStyle.right = 0;
        // }

        // revert to the initial position
        licenceDropdown.style.right = oldRight;
      }

      // if the right position has changed
      if (this.props.licenceData.style.right !== theStyle.right) {
        this.props.dispatch(updateDropdownStyle(theStyle));
      }
    }
  }

  updateSearch (e) {
    // trim and lowercase the entered value
    const searchTerm = e.target.value.toLowerCase();
    this.props.dispatch(updateFilterStr(searchTerm));
  }

  filterLicences () {
    const { cookieUserDetails, licenceData } = this.props;

    let licenceItems = [...cookieUserDetails.items];
    if (licenceData.filterStr !== '') {
      licenceItems = licenceItems.filter(item => {
        // escape the regex chars
        const searchStr = licenceData.filterStr.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        return item.label.toLowerCase().search(searchStr) !== -1;
      });
    }
    return licenceItems;
  }

  render () {
    const { cookieUserDetails, licenceData } = this.props;

    const licenceItems = this.filterLicences();
    const licenceDataLength = cookieUserDetails.items.length;
    const remainingNr = licenceItems.length;

    // if there are no licenses
    if (licenceDataLength === 0) {
      return null;
    }

    let dropdownCls = 'kmt-header__license-dropdown';
    if (licenceData.show === true) {
      dropdownCls += ` ${dropdownCls}--expanded`;
    }

    let wrapperCls = 'kmt-header__license-wrapper';
    if (this.props.mobile === true) {
      wrapperCls += ` ${wrapperCls}--mobile`;
    }
    const kmtHeaderLicenseLabel = `kmt-header__license-label${licenceDataLength === 1 ? '--no-icon' : ''}`;
    const selectSize = remainingNr > 4 ? 4 : (remainingNr < 2 ? 2 : remainingNr);

    return (
      <div className={wrapperCls} ref='theWrapper'>
        <div className={kmtHeaderLicenseLabel} onClick={this.toggleDropdown}>
          <span className='kmt-header__license-used'>{cookieUserDetails.selected.label}</span>
        </div>
        {
        (licenceDataLength > 1) ?
          <div ref='licenceDropdown' className={dropdownCls} style={this.props.mobile !== true ? licenceData.style : {}}>
            {(licenceDataLength > 5)
              ? <div className='kmt-header__license-filter-wrapper'>
                  <input value={licenceData.filterStr} ref='licenceFilter' className='kmt-header__license-filter' type='text' placeholder='Filter licences' onChange={this.updateSearch} />
                </div>
              : null
            }
            <select size={selectSize} className='o-forms__select kmt-forms__select' onChange={this.licenseChanged} >
              {
                licenceItems.map((item, index) => {
                  const className = cookieUserDetails.selected.licenceId === item.licenceId ? 'kmt-forms-option--selected' : '';
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

import { licenseDropdownPropTypes } from '../../reducers/license-dropdown';

LicenseDropdown.propTypes = {
  dispatch: PropTypes.func.isRequired,
  changeFn: PropTypes.func,
  licenceData: PropTypes.shape(licenseDropdownPropTypes).isRequired,
  mobile: PropTypes.bool
};

export default LicenseDropdown;
