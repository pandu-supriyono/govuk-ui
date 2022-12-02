import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
  const labelText = 'Hello, world';
  const testId = 'label';

  it('renders .govuk-label by default', () => {
    render(<Label data-testid={testId}>{labelText}</Label>);

    expect(screen.getByTestId(testId).classList.value).toEqual('govuk-label');
  });

  const cases = [
    ['s', 'govuk-label--s'],
    ['m', 'govuk-label--m'],
    ['l', 'govuk-label--l'],
    ['xl', 'govuk-label--xl'],
  ];

  test.each(cases)(
    'when passed %s as style, it renders .%s',
    (arg, className) => {
      render(<Label data-testid={testId} size={arg as any} />);

      expect(screen.getByTestId(testId).classList.value).toEqual(
        'govuk-label ' + className,
      );
    },
  );

  it('can be wrapped in an h1', () => {
    render(
      <Label data-testid={testId} heading>
        {labelText}
      </Label>,
    );

    expect(screen.getByRole('heading', { level: 1 }).classList.value).toEqual(
      'govuk-label-wrapper',
    );
  });

  it('can take overrides', () => {
    render(
      <Label data-testid={testId} overrides={{ mb: 6 }}>
        {labelText}
      </Label>,
    );

    expect(screen.getByTestId(testId).classList.value).toEqual(
      'govuk-label govuk-!-margin-bottom-6',
    );
  });
});
