import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import Link from './Link';

describe('Link', () => {
  it('renders with .govuk-link by default', () => {
    render(<Link href="/" />);

    expect(screen.getByRole('link').classList.value).toEqual('govuk-link');
  });

  describe('variants', () => {
    const cases = [
      ['muted', 'govuk-link--muted'],
      ['text-colour', 'govuk-link--text-colour'],
      ['inverse', 'govuk-link--inverse'],
    ];

    test.each(cases)(
      'when passed %s as colour, it renders .%s',
      (arg, className) => {
        render(<Link href="/" colour={arg as any} />);

        expect(screen.getByRole('link').classList.value).toEqual(
          'govuk-link ' + className,
        );
      },
    );

    it('renders .govuk-link--no-underline when specified', () => {
      render(<Link href="/" noUnderline />);

      expect(screen.getByRole('link').classList.value).toEqual(
        'govuk-link govuk-link--no-underline',
      );
    });

    it('renders .govuk-link--no-visited state when specified', () => {
      render(<Link href="/" noVisitedState />);

      expect(screen.getByRole('link').classList.value).toEqual(
        'govuk-link govuk-link--no-visited-state',
      );
    });
  });

  it('exposes a ref', () => {
    const ref = createRef<HTMLAnchorElement>();

    const { container } = render(<Link href="/" ref={ref} />);

    expect(ref.current).toEqual(container.querySelector('a'));
  });

  it('allows a link to be passed into it', () => {
    render(<Link href="/link" />);

    expect(screen.getByRole('link').getAttribute('href')).toEqual('/link');
  });
});
