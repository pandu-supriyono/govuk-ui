import { render, screen } from '@testing-library/react';
import FormGroup from './FormGroup';

describe('FormGroup', () => {
  it('renders a div with .govuk-form-group by default', () => {
    render(<FormGroup data-testid="form-group" />);

    expect(screen.getByTestId('form-group').classList.value).toEqual(
      'govuk-form-group',
    );
  });

  it('takes an error prop and renders .govuk-form-group--error', () => {
    render(<FormGroup error data-testid="form-group" />);

    expect(screen.getByTestId('form-group').classList.value).toEqual(
      'govuk-form-group govuk-form-group--error',
    );
  });

  it('takes custom classes', () => {
    render(<FormGroup className="test" data-testid="form-group" />);

    expect(screen.getByTestId('form-group').classList.value).toEqual(
      'govuk-form-group test',
    );
  });

  it('takes override classes', () => {
    render(
      <FormGroup
        overrides={{
          mb: 6,
        }}
        data-testid="form-group"
      />,
    );

    expect(screen.getByTestId('form-group').classList.value).toEqual(
      'govuk-form-group govuk-!-margin-bottom-6',
    );
  });
});
