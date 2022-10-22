import classNames from 'classnames';
import { GovukOverridesProps } from '../types/GovukOverrides';

const getOverrideClasses = (overrides: GovukOverridesProps = {}) => {
  const overrideClasses = classNames({
    [`govuk-!-margin-top-${overrides.mt || overrides.m}`]:
      overrides.mt || overrides.m,
    [`govuk-!-margin-bottom-${overrides.mb || overrides.m}`]:
      overrides.mb || overrides.m,
    [`govuk-!-margin-left-${overrides.ml || overrides.m}`]:
      overrides.ml || overrides.m,
    [`govuk-!-margin-right-${overrides.mr || overrides.m}`]:
      overrides.mr || overrides.m,

    [`govuk-!-padding-top-${overrides.pt || overrides.p}`]:
      overrides.pt || overrides.p,
    [`govuk-!-padding-bottom-${overrides.pt || overrides.p}`]:
      overrides.pb || overrides.p,
    [`govuk-!-padding-left-${overrides.pt || overrides.p}`]:
      overrides.pl || overrides.p,
    [`govuk-!-padding-right-${overrides.pr || overrides.p}`]:
      overrides.pr || overrides.p,

    [`govuk-!-display-${overrides.display}`]: overrides.display,

    [`govuk-!-width-${overrides.width}`]: overrides.width,
  });

  return overrideClasses;
};

export default getOverrideClasses;
