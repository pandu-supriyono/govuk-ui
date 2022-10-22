import { render, screen } from '@testing-library/react';
import { OverridableComponentProps } from '../types/GovukOverrides';
import withGovukOverrides from './withGovukOverrides';

describe('withGovukOverrides', () => {
  const BaseMockComponent = (
    props: OverridableComponentProps<{
      text?: string;
    }>,
  ) => {
    const { text, className, ...rest } = props;
    return (
      <button className={className} {...rest}>
        {text || 'Default text'}
      </button>
    );
  };

  const MockComponent = withGovukOverrides(BaseMockComponent);

  it('attaches a display name to the wrapped component', () => {
    expect(MockComponent.displayName).toEqual(
      'withGovukOverrides(BaseMockComponent)',
    );
  });

  it('defaults a display name to a wrapped component', () => {
    const NoDisplayNameComponent = withGovukOverrides(() => {
      return <button>test</button>;
    });

    expect(NoDisplayNameComponent.displayName).toEqual(
      'withGovukOverrides(Component)',
    );
  });

  it('forwards classNames', () => {
    render(<MockComponent className="test" />);

    expect(screen.getByRole('button').classList.value).toEqual('test');
  });

  it('forwards classNames in combination with overriden classes', () => {
    render(
      <MockComponent
        className="test"
        overrides={{
          mt: 4,
        }}
      />,
    );

    expect(screen.getByRole('button').classList.value).toEqual(
      'test govuk-!-margin-top-4',
    );
  });

  it('forwards other props', () => {
    const textContent = 'Hello world';
    render(<MockComponent className="test" text={textContent} />);

    expect(screen.getByRole('button')).toHaveTextContent(textContent);
  });
});
