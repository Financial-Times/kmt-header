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

	describe('has the right html content', () => {
		const feedbackFormComponentMounted = mount(
			<FeedbackForm dispatch={mockDispatch} isValid={true} />
		);

		it('contains feedback intro', () => {
			const feedbackIntro =
			<div className="kat-feedback__row">
				<p className="kat-feedback__intro-text">Please share your feedback on the new Knowledge and Administration Tool (KAT) so that we can continue to develop it in line with customer requirements.</p>
			</div>;

			expect(feedbackFormComponentMounted.contains(feedbackIntro)).toEqual(true);
		});

		it('contains form label', () => {
			const formLabel =
			<label className="o-forms__label">How satisfied are you with FT KAT?</label>;

			expect(feedbackFormComponentMounted.contains(formLabel)).toEqual(true);
		});

		it('contains four html blocks', () => {
			expect(feedbackFormComponentMounted.find('.kat-feedback__row').length).toEqual(4);
		});

		it('contains textarea title', () => {
			const textArea =
				<label className="o-forms__label" htmlFor="positivefeedback">How can we improve KAT?</label>;

			expect(feedbackFormComponentMounted.contains(textArea)).toEqual(true);
		});

		it('contains one and only one submit button', () => {
			expect(feedbackFormComponentMounted.find('button').length).toEqual(1);
			expect(feedbackFormComponentMounted.find('.kat-feedback__submit').length).toEqual(1);
		});

		it('contains one and only one form', () => {
			expect(feedbackFormComponentMounted.find('form').length).toEqual(1);
		});
	});

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
