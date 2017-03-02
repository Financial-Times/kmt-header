import React, { Component, PropTypes } from 'react';
import { submitFeedback, toggleFeedbackValid } from "../../actions/feedback-form";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.getData = this.getData.bind(this);
    this.toggleValidState = this.toggleValidState.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  toggleValidState() {
    const theData = this.getData();
    const isValid = Object.keys(theData).some((key) => theData[key] !== undefined && theData[key].trim().length > 0);
    if (this.props.isValid !== isValid) {
      this.props.dispatch(toggleFeedbackValid());
    }
  }

  getData() {
    const theData = {
      npsscore: undefined,
      positivefeedback: undefined,
      negativefeedback: undefined
    };
    Object.keys(this.refs).forEach((key) => {
      if (key.indexOf("nps") === 0) {
        if (this.refs[key].checked) {
          theData["npsscore"] = this.refs[key].value;
        }
      } else {
        theData[key] = this.refs[key].value;
      }
    });

    return theData;
  }

  submit(e) {
    e.preventDefault();
    const theForm = e.target;
    if (theForm) {
      const theUrl = theForm.getAttribute("action");
      this.props.dispatch(submitFeedback(theUrl, this.getData()));
    }
  }

  render() {
    const formAttr = {
      action: "#"
    };
    const submitAttr = {
      disabled: true,
      type: "button"
    };
    if (this.props.isValid === true) {
      formAttr.action = window.FEEDBACK_ROUTE;
      formAttr.onSubmit = this.submit;
      submitAttr.type = "submit";
      delete submitAttr.disabled;
    }

    return (
      <div>
        <form method="POST" className="kat-feedback" {...formAttr}>
          <div className="kat-feedback__row">
            <div>We'd love to hear your feedback about our Knowledge & Administration Tools, aka KAT. Please tell us your thoughts below. If you would like a reply, please leave your name and email address with your comments.</div>
          </div>
          <div className="kat-feedback__row">
            <label className="o-forms__label">How satisfied are you with FT KAT?</label>
          </div>
          <div className="kat-feedback__row">
            <small className="o-forms__additional-info kat-feedback__less">Less Likely</small>
            <small className="o-forms__additional-info kat-feedback__more">Extremely Likely</small>
            <div className="kat-feedback__score">
              <input type="radio" name="npsscore" value="0" className="o-forms__radio o-forms__radio--small" id="nps0" ref="nps0" onChange={this.toggleValidState} />
              <label htmlFor="nps0" className="o-forms__label nps-label">0</label>
              <input type="radio" name="npsscore" value="1" className="o-forms__radio o-forms__radio--small" id="nps1" ref="nps1" onChange={this.toggleValidState} />
              <label htmlFor="nps1" className="o-forms__label nps-label">1</label>
              <input type="radio" name="npsscore" value="2" className="o-forms__radio o-forms__radio--small" id="nps2" ref="nps2" onChange={this.toggleValidState} />
              <label htmlFor="nps2" className="o-forms__label nps-label">2</label>
              <input type="radio" name="npsscore" value="3" className="o-forms__radio o-forms__radio--small" id="nps3" ref="nps3" onChange={this.toggleValidState} />
              <label htmlFor="nps3" className="o-forms__label nps-label">3</label>
              <input type="radio" name="npsscore" value="4" className="o-forms__radio o-forms__radio--small" id="nps4" ref="nps4" onChange={this.toggleValidState} />
              <label htmlFor="nps4" className="o-forms__label nps-label">4</label>
              <input type="radio" name="npsscore" value="5" className="o-forms__radio o-forms__radio--small" id="nps5" ref="nps5" onChange={this.toggleValidState} />
              <label htmlFor="nps5" className="o-forms__label nps-label">5</label>
              <input type="radio" name="npsscore" value="6" className="o-forms__radio o-forms__radio--small" id="nps6" ref="nps6" onChange={this.toggleValidState} />
              <label htmlFor="nps6" className="o-forms__label nps-label">6</label>
              <input type="radio" name="npsscore" value="7" className="o-forms__radio o-forms__radio--small" id="nps7" ref="nps7" onChange={this.toggleValidState} />
              <label htmlFor="nps7" className="o-forms__label nps-label">7</label>
              <input type="radio" name="npsscore" value="8" className="o-forms__radio o-forms__radio--small" id="nps8" ref="nps8" onChange={this.toggleValidState} />
              <label htmlFor="nps8" className="o-forms__label nps-label">8</label>
              <input type="radio" name="npsscore" value="9" className="o-forms__radio o-forms__radio--small" id="nps9" ref="nps9" onChange={this.toggleValidState} />
              <label htmlFor="nps9" className="o-forms__label nps-label">9</label>
              <input type="radio" name="npsscore" value="10" className="o-forms__radio o-forms__radio--small" id="nps10" ref="nps10" onChange={this.toggleValidState} />
              <label htmlFor="nps10" className="o-forms__label nps-label">10</label>
            </div>
          </div>
          <div className="kat-feedback__row">
            <label className="o-forms__label">Would you like to...</label>
            <label className="o-forms__label">Leave a comment?</label>
            <textarea className="o-forms__textarea kat-feedback__textarea" name="positivefeedback" ref="positivefeedback" onChange={this.toggleValidState}></textarea>
          </div>

          <div className="kat-feedback__row">
            <label className="o-forms__label">Report something is missing or not working?</label>
            <textarea className="o-forms__textarea kat-feedback__textarea" name="negativefeedback" ref="negativefeedback" onChange={this.toggleValidState}></textarea>
          </div>
          <div className="kat-feedback__row">
            <button className="kat-feedback__submit" {...submitAttr}>Submit</button>
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
