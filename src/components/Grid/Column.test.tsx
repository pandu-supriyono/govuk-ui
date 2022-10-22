import { render, screen } from '@testing-library/react';
import { GovukWidth } from '../../types/Width';
import Column from './Column';

describe('Column', () => {
  it('should add a width of two-thirds by default', () => {
    render(<Column data-testid="column" />);

    expect(screen.getByTestId('column').classList.value).toEqual(
      'govuk-grid-column-two-thirds',
    );
  });

  describe('width', () => {
    const cases = [
      ['one-third', 'govuk-grid-column-one-third'],
      ['two-thirds', 'govuk-grid-column-two-thirds'],
      ['three-thirds', 'govuk-grid-column-three-thirds'],
      ['one-quarter', 'govuk-grid-column-one-quarter'],
      ['one-half', 'govuk-grid-column-one-half'],
      ['three-quarters', 'govuk-grid-column-three-quarters'],
    ];

    test.each(cases)(
      'it should apply width class .govuk-grid-column-%j',
      (width, expected) => {
        render(<Column data-testid="column" width={width as GovukWidth} />);

        expect(screen.getByTestId('column').classList.value).toEqual(expected);
      },
    );
  });

  it('should apply overrides', () => {
    render(<Column data-testid="column" overrides={{ mb: 2 }} />);

    expect(screen.getByTestId('column').classList.value).toEqual(
      'govuk-grid-column-two-thirds govuk-!-margin-bottom-2',
    );
  });
});
