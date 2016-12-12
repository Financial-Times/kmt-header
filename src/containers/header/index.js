import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderTop from './../../components/header-top';
import HeaderNav from './../../components/header-nav';
import Overlay from './../../components/overlay';
import FeedbackForm from './../../components/feedback-form';
import Delegate from 'ftdomdelegate';
import { togglePanel } from "./../../actions/feedback-form";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFeedbackOpenClick = this.handleFeedbackOpenClick.bind(this);
    this.closeFeedback = this.closeFeedback.bind(this);

    this.addListeners();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  addListeners () {
    const bodyDelegate = new Delegate();
    bodyDelegate.root(document.body);
    bodyDelegate.on('click', '.aaa', this.handleFeedbackOpenClick);
  }

  handleFeedbackOpenClick (e) {
    console.log(e);
    e.preventDefault();
    this.props.dispatch(togglePanel());
  }

  closeFeedback() {
    this.props.dispatch(togglePanel());
  }

  render() {
    const headerTopProps = {
      dispatch: this.props.dispatch,
      headerTitle: this.props.headerTitle,
      enableMobileMenu: this.props.menu.enableMobile,
      extraActions: this.props.extraActions
    };

    const overlayProps = {
      title: "Help us to improve.",
      closeFn: this.closeFeedback
    };

    return (
      <header className='o-header-services o-header-services--b2b' data-o-component='o-header'>
        <HeaderTop {...headerTopProps} />
        <HeaderNav menu={this.props.menu} />
        {this.props.feedbackIsExpanded === true
          ? <Overlay {...overlayProps}>
              <FeedbackForm dispatch={this.props.dispatch} />
            </Overlay>
          : null
        }
      </header>
    );
  }
}

import { menuTypes } from "../../reducers/main-menu";
import { headerTitleTypes } from "../../reducers/header-title";
import { extraActionsTypes } from "../../reducers/extra-actions";

HeaderContainer.propTypes = {
  menu: PropTypes.shape(menuTypes).isRequired,
  headerTitle: PropTypes.shape(headerTitleTypes).isRequired,
  extraActions: PropTypes.shape(extraActionsTypes).isRequired,
  feedbackIsExpanded: PropTypes.bool.isRequired
};

const mapStateToProps = (store) => {
  return {
    menu: store.KmtHeaderNs.mainMenu,
    headerTitle: store.KmtHeaderNs.headerTitle,
    extraActions: store.KmtHeaderNs.extraActions,
    feedbackIsExpanded: store.KmtHeaderNs.feedbackForm.isExpanded
  };
};

export default connect(mapStateToProps)(HeaderContainer);
