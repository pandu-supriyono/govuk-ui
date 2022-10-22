import { render, screen } from '@testing-library/react';
import WidthContainer from './WidthContainer';

describe('WidthContainer', () => {
  it('should render a div with .govuk-width-container by default', () => {
    render(<WidthContainer data-testid="width-container" />);

    expect(screen.getByTestId('width-container').classList.value).toEqual(
      'govuk-width-container',
    );
  });
});
