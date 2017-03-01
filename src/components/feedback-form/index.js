import React, { Component, PropTypes } from 'react';
import { submitFeedback } from "../../actions/feedback-form";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only render if the props (state) have changed
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  submit(e) {
    e.preventDefault();
    const theForm = e.target;
    // TODO: fix this (temporary use)
    if (theForm) {
      const theUrl = theForm.getAttribute("action");
      const data = {};

      const npsscore = document.getElementsByName("npsscore");
      const positivefeedback = document.getElementsByName("positivefeedback");
      const negativefeedback = document.getElementsByName("negativefeedback");
      if (npsscore) {
        for (let item of npsscore) {
          if (item.checked) {
            data.npsscore = item.value;
            break;
          }
        }
      }
      if (positivefeedback && positivefeedback[0]) {
        data.positivefeedback = positivefeedback[0].value;
      }
      if (negativefeedback && negativefeedback[0]) {
        data.negativefeedback = negativefeedback[0].value;
      }

      this.props.dispatch(submitFeedback(theUrl, data));
    }
  }

  render() {
    return (
      <div>
        <form method="POST" className="kat-feedback" action={window.FEEDBACK_ROUTE} onSubmit={this.submit}>
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
              <input type="radio" name="npsscore" value="0" className="o-forms__radio o-forms__radio--small" id="nps0" />
              <label htmlFor="nps0" className="o-forms__label nps-label">0</label>
              <input type="radio" name="npsscore" value="1" className="o-forms__radio o-forms__radio--small" id="nps1"/>
              <label htmlFor="nps1" className="o-forms__label nps-label">1</label>
              <input type="radio" name="npsscore" value="2" className="o-forms__radio o-forms__radio--small" id="nps2"/>
              <label htmlFor="nps2" className="o-forms__label nps-label">2</label>
              <input type="radio" name="npsscore" value="3" className="o-forms__radio o-forms__radio--small" id="nps3"/>
              <label htmlFor="nps3" className="o-forms__label nps-label">3</label>
              <input type="radio" name="npsscore" value="4" className="o-forms__radio o-forms__radio--small" id="nps4"/>
              <label htmlFor="nps4" className="o-forms__label nps-label">4</label>
              <input type="radio" name="npsscore" value="5" className="o-forms__radio o-forms__radio--small" id="nps5"/>
              <label htmlFor="nps5" className="o-forms__label nps-label">5</label>
              <input type="radio" name="npsscore" value="6" className="o-forms__radio o-forms__radio--small" id="nps6"/>
              <label htmlFor="nps6" className="o-forms__label nps-label">6</label>
              <input type="radio" name="npsscore" value="7" className="o-forms__radio o-forms__radio--small" id="nps7"/>
              <label htmlFor="nps7" className="o-forms__label nps-label">7</label>
              <input type="radio" name="npsscore" value="8" className="o-forms__radio o-forms__radio--small" id="nps8"/>
              <label htmlFor="nps8" className="o-forms__label nps-label">8</label>
              <input type="radio" name="npsscore" value="9" className="o-forms__radio o-forms__radio--small" id="nps9"/>
              <label htmlFor="nps9" className="o-forms__label nps-label">9</label>
              <input type="radio" name="npsscore" value="10" className="o-forms__radio o-forms__radio--small" id="nps10"/>
              <label htmlFor="nps10" className="o-forms__label nps-label">10</label>
            </div>
          </div>
          <div className="kat-feedback__row">
            <label className="o-forms__label">Would you like to...</label>
            <label className="o-forms__label">Leave a comment?</label>
            <textarea className="o-forms__textarea kat-feedback__textarea" name="positivefeedback"></textarea>
          </div>

          <div className="kat-feedback__row">
            <label className="o-forms__label">Report something is missing or not working?</label>
            <textarea className="o-forms__textarea kat-feedback__textarea" name="negativefeedback"></textarea>
          </div>
          <div className="kat-feedback__row">
            <button className="kat-feedback__submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

FeedbackForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default FeedbackForm;
