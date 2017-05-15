import React from 'react';
import { mount } from 'enzyme';
import FeedbackForm from './index.js';

describe("<FeedbackForm />", () => {
	const mockDispatch = jest.fn();

	const feedbackFormComponent = mount(
		<FeedbackForm dispatch={mockDispatch} isValid={false} />
	);

	it('should render without errors', () => {
	});

	describe('comment field', () => {
		const textareaFields = feedbackFormComponent.find('textarea');

		it('should appear once on the form', () => {
			expect(textareaFields.length).toBe(1);
		});

		it('should have its own label', () => {
			expect(feedbackFormComponent.find(`label[htmlFor="${textareaFields.prop('id')}"]`).length).toBe(1);
		});
	});

	describe('feedback score', () => {
		const scoreOptions = feedbackFormComponent.find('[name="npsscore"]');
		
		it('should contain 5 options', () => {
			expect(scoreOptions.length).toBe(5);
		});

		it('should have a label for each option', () => {
			expect(feedbackFormComponent.find('.nps-label').length).toBe(5);

			expect(scoreOptions.everyWhere(scoreOptionField => {
				return feedbackFormComponent.find(`label[htmlFor="${scoreOptionField.prop('id')}"]`).length === 1;
			})).toBe(true);
		});
	});

	// it('has the right content', () => {
	// 	const feedbackFormComponentMounted = mount(
	// 		<FeedbackForm dispatch={mockDispatch} isValid={true} />
	// 	);

	// 	const content = 
	// 	// <div>
 //  //       <form method="POST" className="kat-feedback" action="#">
 //          <div className="kat-feedback__row">
 //            <p className="kat-feedback__intro-text">Please share your feedback on the new Knowledge and Administration Tool (KAT) so that we can continue to develop it in line with customer requirements.</p>
 //          </div>

	// 	expect(feedbackFormComponentMounted.contains(content)).toBe(true);
	// });
	
	describe('submit button', () => {
		const submitButton = feedbackFormComponent.find('.kat-feedback__submit');

		it('should be enabled when the form is valid', () => {
			feedbackFormComponent.setProps({isValid: true});
			expect(submitButton.is('[disabled]')).toBe(false);
		});

		it('should be disabled when the form is not valid', () => {
			feedbackFormComponent.setProps({isValid: false});
			expect(submitButton.is('[disabled]')).toBe(true);
		});
	});
});
