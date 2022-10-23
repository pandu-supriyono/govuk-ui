import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import MainWrapper from './MainWrapper';

describe('MainWrapper', () => {
  it('renders a HTML main element with .govuk-main-wrapper', () => {
    render(<MainWrapper />);

    expect(screen.getByRole('main').classList.value).toEqual(
      'govuk-main-wrapper',
    );
  });

  it('renders a HTML main element with #main-content as default', () => {
    render(<MainWrapper />);

    expect(screen.getByRole('main').id).toEqual('main-content');
  });

  it('exposes a ref', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<MainWrapper ref={ref} />);

    expect(ref.current).toEqual(container.querySelector('main'));
  });
});
