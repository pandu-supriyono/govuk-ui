import { render, screen } from '@testing-library/react';
import Fieldset from './';

describe('Fieldset', () => {
  it('renders with .govuk-fieldset by default', () => {
    render(<Fieldset />);

    expect(screen.getByRole('group').classList.value).toEqual('govuk-fieldset');
  });

  it('renders children', () => {
    render(
      <Fieldset>
        <input type="text" name="test" />
      </Fieldset>,
    );

    expect(screen.getByRole('textbox').getAttribute('name')).toEqual('test');
  });

  it('renders with a legend if a string is passed', () => {
    const legendText = 'Hello, world';

    render(<Fieldset legend={legendText} />);

    expect(screen.getByText(legendText).classList.value).toEqual(
      'govuk-fieldset__legend',
    );
  });

  it('can render a custom element as legend', () => {
    const legendText = 'Hello, world';

    render(
      <Fieldset
        legend={<Fieldset.Legend size="xl">{legendText}</Fieldset.Legend>}
      />,
    );

    expect(screen.getByText(legendText).classList.value).toEqual(
      'govuk-fieldset__legend govuk-fieldset__legend--xl',
    );
  });

  it('can take overrides', () => {
    render(
      <Fieldset
        overrides={{
          mb: 6,
        }}
      />,
    );

    expect(screen.getByRole('group').classList.value).toEqual(
      'govuk-fieldset govuk-!-margin-bottom-6',
    );
  });

  describe('Legend', () => {
    it('renders a .govuk-fieldset__legend by default', () => {
      render(<Fieldset.Legend data-testid="test" />);

      expect(screen.getByTestId('test').classList.value).toEqual(
        'govuk-fieldset__legend',
      );
    });

    it('can take overrides', () => {
      render(
        <Fieldset.Legend
          overrides={{
            mb: 6,
          }}
          data-testid="test"
        />,
      );

      expect(screen.getByTestId('test').classList.value).toEqual(
        'govuk-fieldset__legend govuk-!-margin-bottom-6',
      );
    });

    const cases = [
      ['s', 'govuk-fieldset__legend--s'],
      ['m', 'govuk-fieldset__legend--m'],
      ['l', 'govuk-fieldset__legend--l'],
      ['xl', 'govuk-fieldset__legend--xl'],
    ];

    test.each(cases)(
      'when passed %s as style, it renders .%s',
      (arg, className) => {
        render(<Fieldset.Legend data-testid="test" size={arg as any} />);

        expect(screen.getByTestId('test').classList.value).toEqual(
          'govuk-fieldset__legend ' + className,
        );
      },
    );

    it('renders children', () => {
      const legendText = 'Hello, world';
      render(<Fieldset.Legend>{legendText}</Fieldset.Legend>);

      expect(screen.getByText(legendText)).toBeInTheDocument();
    });
  });
});
