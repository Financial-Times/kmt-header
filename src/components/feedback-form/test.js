import React from 'react';
import { shallow } from 'enzyme';
import FeedbackForm from './index.js';

describe("<FeedbackForm />", () => {
	const mockDispatch = jest.fn();

	const feedbackFormComponent = shallow(
		<FeedbackForm dispatch={mockDispatch} isValid={true} />
	);

	it('should render without errors', () => {
	});

	describe('comment field', () => {
		const textareaFields = feedbackFormComponent.find('textarea');

		it('should appear once on the form', () => {
			expect(textareaFields.length).toBe(1);
		});

		it('should have its own label', () => {
			expect(feedbackFormComponent.find(`label[htmlFor="${textareaFields.get(0).props.id}"]`).length).toBe(1);
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
				return feedbackFormComponent.find(`label[htmlFor="${scoreOptionField.get(0).props.id}"]`).length === 1;
			})).toBe(true);
		});
	});

	xit('should disable the submit button by default', () => {

	});

	xit('should enable the submit button when a score has been selected', () => {
		
	});

	xit('should enable the submit button when a textarea field has had some text entered', () => {
		
	});
});
