import { render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup', () => {
  it('renders a div with .govuk-button-group by default', () => {
    render(<ButtonGroup data-testid="button-group" />);

    expect(screen.getByTestId('button-group').classList.value).toEqual(
      'govuk-button-group',
    );
  });
});
