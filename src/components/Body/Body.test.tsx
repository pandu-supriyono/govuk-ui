import { render, screen } from '@testing-library/react';
import Body from './Body';

describe('Body', () => {
  it('should render a HTML paragraph', () => {
    const text = 'Hello world';

    render(<Body>{text}</Body>);

    const element = screen.getByText(text);

    expect(element.tagName).toEqual('P');
  });

  it('should supply the .govuk-body class by default', () => {
    const text = 'Hello world';

    render(<Body>{text}</Body>);

    const element = screen.getByText(text);

    expect(element.classList.value).toEqual('govuk-body');
  });

  it("should supply the .govuk-body-s class when 'xs' is specified as size prop", () => {
    const text = 'Hello world';

    render(<Body size="xs">{text}</Body>);

    const element = screen.getByText(text);

    expect(element.classList.value).toEqual('govuk-body-xs');
  });

  it("should supply the .govuk-body-s class when 's' is specified as size prop", () => {
    const text = 'Hello world';

    render(<Body size="s">{text}</Body>);

    const element = screen.getByText(text);

    expect(element.classList.value).toEqual('govuk-body-s');
  });

  it("should supply the .govuk-body-l class when 'm' is specified as size prop", () => {
    const text = 'Hello world';

    render(<Body size="m">{text}</Body>);

    const element = screen.getByText(text);

    expect(element.classList.value).toEqual('govuk-body-m');
  });

  it("should supply the .govuk-body-l class when 'l' is specified as size prop", () => {
    const text = 'Hello world';

    render(<Body size="l">{text}</Body>);

    const element = screen.getByText(text);

    expect(element.classList.value).toEqual('govuk-body-l');
  });

  it('should be overridable', () => {
    const text = 'Hello world';

    render(
      <Body
        size="l"
        overrides={{
          mb: 4,
        }}
      >
        {text}
      </Body>,
    );

    const element = screen.getByText(text);

    expect(element.classList.value).toEqual(
      'govuk-body-l govuk-!-margin-bottom-4',
    );
  });
});
