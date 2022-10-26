import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import BackLink from './BackLink';

describe('BackLink', () => {
  it('renders .govuk-back-link by default', () => {
    render(<BackLink href="#" />);

    expect(screen.getByRole('link').classList.value).toEqual('govuk-back-link');
  });

  it('is an <a> element', () => {
    render(<BackLink href="#" />);

    expect(screen.getByRole('link').tagName).toEqual('A');
  });

  it('renders "back" by default', () => {
    render(<BackLink href="#" />);

    expect(screen.getByRole('link')).toHaveTextContent('Back');
  });

  it('allows to pass custom classes', () => {
    render(<BackLink href="#" className="custom-class" />);

    expect(screen.getByRole('link').classList.value).toEqual(
      'govuk-back-link custom-class',
    );
  });

  it('exposes a ref', () => {
    const ref = createRef();

    const { container } = render(<BackLink href="#" ref={ref} />);

    expect(ref.current).toEqual(container.querySelector('a'));
  });

  it('allows to pass attributes', () => {
    render(<BackLink href="#" aria-label="Back to home" />);

    expect(screen.getByRole('link').getAttribute('aria-label')).toEqual(
      'Back to home',
    );
  });
});
