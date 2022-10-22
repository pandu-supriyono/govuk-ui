import { render, screen } from '@testing-library/react';
import Row from './Row';

describe('Row', () => {
  it('should render a div with .govuk-grid-row by default', () => {
    render(<Row data-testid="row" />);

    expect(screen.getByTestId('row').classList.value).toEqual('govuk-grid-row');
  });
});
