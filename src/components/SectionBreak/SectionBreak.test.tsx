import { render, screen } from '@testing-library/react';
import SectionBreak from './SectionBreak';

describe('SectionBreak', () => {
  it('renders a hr element by default', () => {
    render(<SectionBreak />);

    expect(screen.getByRole('separator').tagName).toEqual('HR');
  });

  it('renders .govuk-section-break by default', () => {
    render(<SectionBreak />);

    expect(screen.getByRole('separator').classList.value).toEqual(
      'govuk-section-break',
    );
  });

  describe('variants', () => {
    const cases = [
      ['m', 'govuk-section-break--m'],
      ['l', 'govuk-section-break--l'],
      ['xl', 'govuk-section-break--xl'],
    ];

    test.each(cases)(
      'when %s is supplied, it renders .%s',
      (arg, className) => {
        render(<SectionBreak size={arg as any} />);

        expect(screen.getByRole('separator').classList.value).toEqual(
          `govuk-section-break ${className}`,
        );
      },
    );

    it('adds .govuk-section-break--visible when the prop visible is true', () => {
      render(<SectionBreak visible />);

      expect(screen.getByRole('separator').classList.value).toEqual(
        'govuk-section-break govuk-section-break--visible',
      );
    });

    it('passes through custom classes', () => {
      render(<SectionBreak className="custom-class" />);

      expect(screen.getByRole('separator').classList.value).toEqual(
        'govuk-section-break custom-class',
      );
    });
  });
});
