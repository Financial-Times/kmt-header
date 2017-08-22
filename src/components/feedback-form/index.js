import React, { Component, PropTypes } from 'react';
import { submitFeedback, toggleFeedbackValid } from '../../actions/feedback-form';

class FeedbackForm extends Component {
  constructor (props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.getFormData = this.getFormData.bind(this);
    this.toggleValidState = this.toggleValidState.bind(this);
  }

  shouldComponentUpdate (nextProps) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  toggleValidState () {
    const theData = this.getFormData();
    const isValid = Object.keys(theData).some((key) => theData[key] !== undefined && theData[key].trim().length > 0);
    if (this.props.isValid !== isValid) {
      this.props.dispatch(toggleFeedbackValid());
    }
  }

  getFormData () {
    const theData = {
      npsscore: undefined,
      improvefeedback: this.refs.improvefeedback.value
    };

    Object.keys(this.refs).forEach((key) => {
      if (key.indexOf('nps') === 0 && this.refs[key].checked) {
        theData.npsscore = this.refs[key].value;
      }
    });

    return theData;
  }

  submit (e) {
    e.preventDefault();
    if (e.target) {
      this.props.dispatch(submitFeedback(this.getFormData()));
    }
  }

  render () {
    const formAttr = {
      action: '#'
    };
    const submitAttr = {
      disabled: true,
      type: 'button'
    };
    if (this.props.isValid === true) {
      formAttr.action = window.FEEDBACK_ROUTE;
      formAttr.onSubmit = this.submit;
      submitAttr.type = 'submit';
      delete submitAttr.disabled;
    }

    return (
      <div>
        <form method='POST' className='kat-feedback' {...formAttr}>
          <div className='kat-feedback__row'>
            <p className='kat-feedback__intro-text'>Please share your feedback on the new Knowledge & administration tools (KAT) so that we can continue to develop it in line with customer requirements.</p>
          </div>
          <div className='kat-feedback__row'>
            <label className='o-forms__label'>How satisfied are you with FT KAT?</label>
            <div className='kat-feedback__score'>
              <div>
                <input type='radio' name='npsscore' value='5' className='o-forms__radio o-forms__radio--small' id='nps5' ref='nps5' onChange={this.toggleValidState} />
                <label htmlFor='nps5' className='o-forms__label nps-label'>5 - Extremely satisfied</label>
              </div>
              <div>
                <input type='radio' name='npsscore' value='4' className='o-forms__radio o-forms__radio--small' id='nps4' ref='nps4' onChange={this.toggleValidState} />
                <label htmlFor='nps4' className='o-forms__label nps-label'>4 - Somewhat satisfied</label>
              </div>
              <div>
                <input type='radio' name='npsscore' value='3' className='o-forms__radio o-forms__radio--small' id='nps3' ref='nps3' onChange={this.toggleValidState} />
                <label htmlFor='nps3' className='o-forms__label nps-label'>3 - Neither satisfied nor dissatisfied</label>
              </div>
              <div>
                <input type='radio' name='npsscore' value='2' className='o-forms__radio o-forms__radio--small' id='nps2' ref='nps2' onChange={this.toggleValidState} />
                <label htmlFor='nps2' className='o-forms__label nps-label'>2 - Somewhat dissatisfied</label>
              </div>
              <div>
                <input type='radio' name='npsscore' value='1' className='o-forms__radio o-forms__radio--small' id='nps1' ref='nps1' onChange={this.toggleValidState} />
                <label htmlFor='nps1' className='o-forms__label nps-label'>1 - Extremely dissatisfied</label>
              </div>
            </div>
          </div>
          <div className='kat-feedback__row'>
            <label className='o-forms__label' htmlFor='improvefeedback'>How can we improve KAT?</label>
            <textarea className='o-forms__textarea kat-feedback__textarea' name='improvefeedback' id='improvefeedback' ref='improvefeedback' onChange={this.toggleValidState}></textarea>
          </div>
          <div className='kat-feedback__row'>
            <button className='kat-feedback__submit' {...submitAttr} data-trackable='submit-feedback' >Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

FeedbackForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired
};

export default FeedbackForm;
