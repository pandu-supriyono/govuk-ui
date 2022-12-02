import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import Button from './Button';

describe('Button', () => {
  it('renders a html <button> by default', () => {
    render(<Button />);

    expect(screen.getByRole('button').tagName).toEqual('BUTTON');
  });

  it('can pass button-specific attributes', () => {
    render(<Button type="button" />);

    expect(screen.getByRole('button').getAttribute('type')).toEqual('button');
  });

  it('can render as a html <a>', () => {
    render(
      <Button as="a" href="/">
        Link
      </Button>,
    );

    expect(screen.getByRole('link').tagName).toEqual('A');
  });

  describe('variants', () => {
    const colourCases = [
      ['secondary', 'govuk-button--secondary'],
      ['warning', 'govuk-button--warning'],
    ];

    test.each(colourCases)(
      'when passed %s as style, it renders .%s',
      (arg, className) => {
        render(<Button colour={arg as any}>Button</Button>);

        expect(screen.getByRole('button').classList.value).toEqual(
          'govuk-button ' + className,
        );
      },
    );

    it('renders a large button', () => {
      render(<Button large>Button</Button>);

      expect(screen.getByRole('button').classList.value).toEqual(
        'govuk-button govuk-button--large',
      );
    });

    it('renders a start button', () => {
      render(<Button start>Button</Button>);

      expect(screen.getByRole('button').classList.value).toEqual(
        'govuk-button govuk-button--start',
      );
    });

    it('renders an arrow when a start button', () => {
      const { container } = render(<Button start />);

      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('renders a disabled button', () => {
      render(<Button disabled>Button</Button>);

      expect(screen.getByRole('button').classList.value).toEqual(
        'govuk-button govuk-button--disabled',
      );
    });

    it('sets aria-disabled when disabled', () => {
      render(<Button disabled>Button</Button>);

      expect(
        screen.getByRole('button').getAttribute('aria-disabled'),
      ).toBeTruthy();
    });
  });

  it('exposes a ref', () => {
    const ref = createRef<HTMLButtonElement>();

    const { container } = render(<Button ref={ref} />);

    expect(ref.current).toEqual(container.querySelector('button'));
  });

  it('allows custom classes', () => {
    render(<Button className="custom-class">Button</Button>);

    expect(screen.getByRole('button').classList.value).toEqual(
      'govuk-button custom-class',
    );
  });
});
