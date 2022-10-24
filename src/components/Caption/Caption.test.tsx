import { render, screen } from '@testing-library/react';
import Caption from './Caption';

describe('Caption', () => {
  it('renders a span by default', () => {
    render(<Caption data-testid="caption">Hello, world</Caption>);

    expect(screen.getByTestId('caption').tagName).toEqual('SPAN');
  });

  const possibleTags = ['span', 'div'];

  test.each(possibleTags)('it can render a %s tag', (tag) => {
    render(
      <Caption data-testid="caption" as={tag as any}>
        Hello, world
      </Caption>,
    );

    expect(screen.getByTestId('caption').tagName).toEqual(tag.toUpperCase());
  });

  it('renders .govuk-caption-l by default', () => {
    render(<Caption data-testid="caption">Hello, world</Caption>);

    expect(screen.getByTestId('caption').classList.value).toEqual(
      'govuk-caption-l',
    );
  });

  const possibleSizes = [
    ['m', 'govuk-caption-m'],
    ['l', 'govuk-caption-l'],
    ['xl', 'govuk-caption-xl'],
  ];

  test.each(possibleSizes)(
    'when size %s is supplied, .%s is rendered',
    (arg, className) => {
      render(
        <Caption data-testid="caption" size={arg as any}>
          Hello, world
        </Caption>,
      );

      expect(screen.getByTestId('caption').classList.value).toEqual(className);
    },
  );

  it('can add custom classes', () => {
    render(
      <Caption data-testid="caption" className="custom-class">
        Hello, world
      </Caption>,
    );

    expect(screen.getByTestId('caption').classList.value).toEqual(
      'govuk-caption-l custom-class',
    );
  });

  it('can take overrides', () => {
    render(
      <Caption
        data-testid="caption"
        overrides={{
          mb: 6,
        }}
      >
        Hello, world
      </Caption>,
    );

    expect(screen.getByTestId('caption').classList.value).toEqual(
      'govuk-caption-l govuk-!-margin-bottom-6',
    );
  });
});
