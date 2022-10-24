import { render, screen } from '@testing-library/react';
import List from './List';

describe('List', () => {
  it('renders an unordered list by default', () => {
    render(
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
      </List>,
    );

    expect(screen.getByRole('list').tagName).toEqual('UL');
  });

  it('renders .govuk-list by default', () => {
    render(
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
      </List>,
    );

    expect(screen.getByRole('list').classList.value).toEqual('govuk-list');
  });

  it('can render an ordered list', () => {
    render(
      <List as="ol">
        <li>Item 1</li>
        <li>Item 2</li>
      </List>,
    );

    expect(screen.getByRole('list').tagName).toEqual('OL');
  });

  describe('variants', () => {
    const cases = [
      ['bullet', 'govuk-list--bullet'],
      ['number', 'govuk-list--number'],
    ];

    test.each(cases)(
      'when passed %s as style, it renders .%s',
      (arg, className) => {
        render(
          <List type={arg as any}>
            <li>Item 1</li>
            <li>Item 2</li>
          </List>,
        );

        expect(screen.getByRole('list').classList.value).toEqual(
          'govuk-list ' + className,
        );
      },
    );

    it('can render the list spaced', () => {
      render(
        <List spaced>
          <li>Item 1</li>
          <li>Item 2</li>
        </List>,
      );

      expect(screen.getByRole('list').classList.value).toEqual(
        'govuk-list govuk-list--spaced',
      );
    });
  });

  it('can pass through a custom className', () => {
    render(
      <List className="custom-class">
        <li>Item 1</li>
        <li>Item 2</li>
      </List>,
    );

    expect(screen.getByRole('list').classList.value).toEqual(
      'govuk-list custom-class',
    );
  });
});
