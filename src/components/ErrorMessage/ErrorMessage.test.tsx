import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  const errorMessageContent = 'Error message';
  const testId = 'testId';

  it('renders with .govuk-error-message', () => {
    render(
      <ErrorMessage data-testid={testId}>{errorMessageContent}</ErrorMessage>,
    );

    expect(screen.getByTestId(testId).classList.value).toEqual(
      'govuk-error-message',
    );
  });

  it('renders a <p> element', () => {
    render(
      <ErrorMessage data-testid={testId}>{errorMessageContent}</ErrorMessage>,
    );

    expect(screen.getByTestId(testId).tagName).toEqual('P');
  });

  it('renders a visually hidden announcement', () => {
    render(
      <ErrorMessage data-testid={testId}>{errorMessageContent}</ErrorMessage>,
    );

    expect(screen.getByTestId(testId)).toContainHTML(
      '<span class="govuk-visually-hidden">Error:</span>',
    );
  });

  it('can use a different visually hidden annoucement', () => {
    render(
      <ErrorMessage data-testid={testId} screenReaderAnnouncement="Kesalahan">
        {errorMessageContent}
      </ErrorMessage>,
    );

    expect(screen.getByTestId(testId)).toContainHTML(
      '<span class="govuk-visually-hidden">Kesalahan:</span>',
    );
  });

  it('renders children', () => {
    render(
      <ErrorMessage data-testid={testId} screenReaderAnnouncement="Kesalahan">
        {errorMessageContent}
      </ErrorMessage>,
    );

    expect(screen.getByTestId(testId)).toHaveTextContent(errorMessageContent);
  });

  it('takes overrides', () => {
    render(
      <ErrorMessage data-testid={testId} overrides={{ mb: 6 }}>
        {errorMessageContent}
      </ErrorMessage>,
    );

    expect(screen.getByTestId(testId).classList.value).toEqual(
      'govuk-error-message govuk-!-margin-bottom-6',
    );
  });
});
