import { GovukWidth } from '../types/Width';
import { GovukDisplayOverride } from '../types/GovukOverrides';
import getGovukOverrideClasses from './getGovukOverrideClasses';

describe('getGovukOverrideClasses', () => {
  it('should be able to take an empty argument and produce an empty string', () => {
    const result = getGovukOverrideClasses();

    expect(result).toEqual('');
  });

  describe('width', () => {
    const cases = [
      ['one-third', 'govuk-!-width-one-third'],
      ['two-thirds', 'govuk-!-width-two-thirds'],
      ['three-thirds', 'govuk-!-width-three-thirds'],
      ['one-quarter', 'govuk-!-width-one-quarter'],
      ['one-half', 'govuk-!-width-one-half'],
      ['three-quarters', 'govuk-!-width-three-quarters'],
    ];

    test.each(cases)('it should apply width override %j', (width, expected) => {
      const result = getGovukOverrideClasses({
        width: width as GovukWidth,
      });

      expect(result).toContain(expected);
    });
  });

  describe('display', () => {
    const cases = [
      ['inline', 'govuk-!-display-inline'],
      ['inline-block', 'govuk-!-display-inline-block'],
      ['block', 'govuk-!-display-block'],
      ['none', 'govuk-!-display-none'],
      ['none-print', 'govuk-!-display-none-print'],
    ];

    test.each(cases)(
      'it should apply display override %j',
      (display, expected) => {
        const result = getGovukOverrideClasses({
          display: display as GovukDisplayOverride,
        });

        expect(result).toContain(expected);
      },
    );
  });

  describe('margin', () => {
    it('should add general margins when specified', () => {
      const result = getGovukOverrideClasses({
        m: 2,
      });

      expect(result).toContain('govuk-!-margin-top-2');
      expect(result).toContain('govuk-!-margin-right-2');
      expect(result).toContain('govuk-!-margin-left-2');
      expect(result).toContain('govuk-!-margin-bottom-2');
    });

    it('should prioritize specific directions over a general margin', () => {
      const result = getGovukOverrideClasses({
        m: 2,
        mt: 6,
      });

      expect(result).toContain('govuk-!-margin-top-6');
    });
  });

  describe('padding', () => {
    it('should add general paddings when specified', () => {
      const result = getGovukOverrideClasses({
        p: 2,
      });

      expect(result).toContain('govuk-!-padding-top-2');
      expect(result).toContain('govuk-!-padding-right-2');
      expect(result).toContain('govuk-!-padding-left-2');
      expect(result).toContain('govuk-!-padding-bottom-2');
    });

    it('should prioritize specific directions over a general padding', () => {
      const result = getGovukOverrideClasses({
        p: 2,
        pt: 6,
      });

      expect(result).toContain('govuk-!-padding-top-6');
    });
  });
});
