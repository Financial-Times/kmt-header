import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderTop from './../../components/header-top';
import HeaderNav from './../../components/header-nav';
import Overlay from './../../components/overlay';
import FeedbackForm from './../../components/feedback-form';
import { togglePanel } from './../../actions/feedback-form';

class HeaderContainer extends Component {
  constructor (props) {
    super(props);
    this.closeFeedback = this.closeFeedback.bind(this);
  }

  shouldComponentUpdate (nextProps) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  closeFeedback () {
    this.props.dispatch(togglePanel());
  }

  render () {
    const headerTopProps = {
      dispatch: this.props.dispatch,
      headerTitle: this.props.headerTitle,
      enableMobileMenu: this.props.menu.enableMobile,
      extraActions: this.props.extraActions
    };

    const overlayProps = {
      title: 'Help us improve',
      closeFn: this.closeFeedback
    };

    return (
      <header className='o-header-services o-header-services--b2b' data-o-component='o-header'>
        <HeaderTop {...headerTopProps} />
        <HeaderNav menu={this.props.menu} dispatch={this.props.dispatch} />
        {this.props.feedbackIsExpanded === true
          ? <Overlay {...overlayProps}>
              <FeedbackForm dispatch={this.props.dispatch} isValid={this.props.feedbackIsValid} />
            </Overlay>
          : null
        }
      </header>
    );
  }
}

import { menuTypes } from '../../reducers/main-menu';
import { headerTitleTypes } from '../../reducers/header-title';
import { extraActionsTypes } from '../../reducers/extra-actions';

HeaderContainer.propTypes = {
  menu: PropTypes.shape(menuTypes).isRequired,
  headerTitle: PropTypes.shape(headerTitleTypes).isRequired,
  extraActions: PropTypes.shape(extraActionsTypes).isRequired,
  feedbackIsExpanded: PropTypes.bool.isRequired,
  feedbackIsValid: PropTypes.bool.isRequired
};

const mapStateToProps = (store) => {
  return {
    menu: store.KmtHeaderNs.mainMenu,
    headerTitle: store.KmtHeaderNs.headerTitle,
    extraActions: store.KmtHeaderNs.extraActions,
    feedbackIsExpanded: store.KmtHeaderNs.feedbackForm.isExpanded,
    feedbackIsValid: store.KmtHeaderNs.feedbackForm.isValid
  };
};

export default connect(mapStateToProps)(HeaderContainer);
