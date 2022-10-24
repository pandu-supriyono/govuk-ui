import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  it('renders a h1 by default', () => {
    render(<Heading>Hello, world</Heading>);

    expect(screen.getByRole('heading').tagName).toEqual('H1');
  });

  const possibleTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  test.each(possibleTags)('it can render a %s tag', (tag) => {
    render(<Heading as={tag as any}>Hello, world</Heading>);

    expect(screen.getByRole('heading').tagName).toEqual(tag.toUpperCase());
  });

  it('renders .govuk-heading-l by default', () => {
    render(<Heading>Hello, world</Heading>);

    expect(screen.getByRole('heading').classList.value).toEqual(
      'govuk-heading-l',
    );
  });

  const possibleSizes = [
    ['s', 'govuk-heading-s'],
    ['m', 'govuk-heading-m'],
    ['l', 'govuk-heading-l'],
    ['xl', 'govuk-heading-xl'],
  ];

  test.each(possibleSizes)(
    'when size %s is supplied, .%s is rendered',
    (arg, className) => {
      render(<Heading size={arg as any}>Hello, world</Heading>);

      expect(screen.getByRole('heading').classList.value).toEqual(className);
    },
  );

  it('can add custom classes', () => {
    render(<Heading className="custom-class">Hello, world</Heading>);

    expect(screen.getByRole('heading').classList.value).toEqual(
      'govuk-heading-l custom-class',
    );
  });

  it('can take overrides', () => {
    render(
      <Heading
        overrides={{
          mb: 6,
        }}
      >
        Hello, world
      </Heading>,
    );

    expect(screen.getByRole('heading').classList.value).toEqual(
      'govuk-heading-l govuk-!-margin-bottom-6',
    );
  });
});
